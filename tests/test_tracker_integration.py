"""Exercise the tracker API and concurrency against AUTH_TEST_DATABASE_URL."""

import asyncio
import os
from contextlib import AsyncExitStack
from uuid import UUID, uuid4

import httpx
import pytest
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select

import app.core.config as config_module
from app.core.security import token_hash
from app.models.group import Group, GroupInvitation, GroupMember
from app.models.task import Task, TaskStatus
from app.schemas.task import TaskCreate, TaskUpdate
from app.services.group import GroupNotFoundError, GroupService, InvitationNotFoundError
from app.services.task import TaskCompletedError, TaskService
from tests.fakes import enable_csrf
from tests.test_auth_integration import (
    database as database,
)
from tests.test_auth_integration import (
    migrate_database as migrate_database,
)
from tests.test_auth_integration import (
    register as register,
)
from tests.test_auth_integration import (
    settings as settings,
)

pytestmark = pytest.mark.skipif(
    not os.getenv("AUTH_TEST_DATABASE_URL"),
    reason="Set AUTH_TEST_DATABASE_URL to a dedicated test database",
)


@pytest.fixture
async def accounts(register):
    return tuple([await register("test_" + uuid4().hex[:20]) for _ in range(3)])


@pytest.fixture
async def clients(settings, accounts, monkeypatch):
    monkeypatch.setattr(config_module, "get_settings", lambda: settings)
    from app.main import app

    monkeypatch.setattr(app.state, "settings", settings)
    cors = next(item for item in app.user_middleware if item.cls is CORSMiddleware)
    monkeypatch.setitem(cors.kwargs, "allow_origins", settings.allowed_origins)
    monkeypatch.setattr(app, "middleware_stack", None)
    monkeypatch.setattr(app, "dependency_overrides", {})
    async with app.router.lifespan_context(app), AsyncExitStack() as stack:
        clients = []
        for account in accounts:
            client = await stack.enter_async_context(
                httpx.AsyncClient(
                    transport=httpx.ASGITransport(app=app),
                    base_url="https://api.example.com",
                    headers={"Origin": settings.allowed_origins[0]},
                )
            )
            enable_csrf(client)
            response = await client.post(
                "/api/v1/auth/login", json={"login": account.login, "password": "secret"}
            )
            assert response.status_code == 200
            clients.append(client)
        yield tuple(clients)


@pytest.fixture
async def group(clients):
    owner, member, _ = clients
    response = await owner.post("/api/v1/groups", json={"name": "Семья"})
    assert response.status_code == 201
    group = response.json()
    invitation = await owner.post(f"/api/v1/groups/{group['id']}/invitation")
    response = await member.post(f"/api/v1/invitations/{invitation.json()['token']}/accept")
    assert response.status_code == 200
    return group


async def test_personal_task_lifecycle_and_privacy(clients, accounts):
    owner, other, _ = clients
    response = await owner.post("/api/v1/tasks", json={"title": "Прочитать книгу"})
    assert response.status_code == 201
    task = response.json()
    path = f"/api/v1/tasks/{task['id']}"
    assert task["creator_id"] == str(accounts[0].id)
    assert task["group_id"] is None
    assert task["description"] is None
    assert task["priority"] == "normal"
    assert task["status"] == "open"
    assert (await other.get("/api/v1/tasks")).json() == []
    assert (await other.get(path)).status_code == 404
    assert (await other.patch(path, json={"title": "Forbidden"})).status_code == 404
    assert (await other.delete(path)).status_code == 404

    response = await owner.patch(
        path,
        json={
            "description": "Сегодня",
            "priority": "high",
            "status": "in_progress",
            "assignee_id": str(accounts[0].id),
        },
    )
    assert response.status_code == 200
    response = await owner.patch(path, json={"description": None})
    assert response.json()["description"] is None
    assert response.json()["title"] == task["title"]
    assert response.json()["priority"] == "high"
    assert (await owner.patch(path, json={"status": "open"})).status_code == 200
    assert (await owner.patch(path, json={"status": "completed"})).status_code == 200
    assert (await owner.get(path)).json()["status"] == "completed"
    for changes in [
        {"title": "Changed"},
        {"description": "Changed"},
        {"priority": "low"},
        {"status": "open"},
        {"assignee_id": None},
        {},
    ]:
        assert (await owner.patch(path, json=changes)).status_code == 409
    assert (await owner.delete(path)).status_code == 409


async def test_all_members_can_edit_assign_complete_and_delete_tasks(clients, accounts, group):
    owner, member, _ = clients
    response = await owner.post(
        "/api/v1/tasks",
        json={
            "title": "Купить молоко",
            "group_id": group["id"],
        },
    )
    assert response.status_code == 201
    task = response.json()
    assert task["assignee_id"] is None
    path = f"/api/v1/tasks/{task['id']}"
    response = await member.patch(
        path,
        json={
            "title": "Купить продукты",
            "description": "Молоко и хлеб",
            "priority": "high",
            "status": "in_progress",
            "assignee_id": str(accounts[0].id),
        },
    )
    assert response.status_code == 200
    assert response.json()["assignee_id"] == str(accounts[0].id)
    assert response.json()["title"] == "Купить продукты"
    # A participant can complete a task assigned to someone else.
    assert (await member.patch(path, json={"status": "completed"})).status_code == 200
    assert (await owner.patch(path, json={"title": "Changed"})).status_code == 409
    assert (await member.delete(path)).status_code == 409

    response = await owner.post("/api/v1/tasks", json={"title": "Удалить", "group_id": group["id"]})
    path = f"/api/v1/tasks/{response.json()['id']}"
    assert (await member.delete(path)).status_code == 204
    assert (await owner.get(path)).status_code == 404


async def test_group_access_and_assignees_are_checked(clients, accounts, group):
    owner, member, outsider = clients
    group_path = f"/api/v1/groups/{group['id']}"
    response = await owner.post("/api/v1/tasks", json={"title": "Shared", "group_id": group["id"]})
    task_path = f"/api/v1/tasks/{response.json()['id']}"
    assert (await outsider.get(group_path)).status_code == 404
    assert (await outsider.get(group_path + "/members")).status_code == 404
    assert (await outsider.get(task_path)).status_code == 404
    assert (await outsider.patch(task_path, json={"status": "completed"})).status_code == 404
    assert (await outsider.delete(task_path)).status_code == 404
    assert (await outsider.get("/api/v1/tasks")).json() == []
    assert (
        await outsider.get("/api/v1/tasks", params={"group_id": group["id"]})
    ).status_code == 404
    assert (
        await outsider.post(
            "/api/v1/tasks",
            json={
                "title": "Forbidden",
                "group_id": group["id"],
            },
        )
    ).status_code == 404
    invalid_assignee = str(accounts[2].id)
    for client in (owner, member):
        assert (
            await client.post(
                "/api/v1/tasks",
                json={
                    "title": "Invalid",
                    "group_id": group["id"],
                    "assignee_id": invalid_assignee,
                },
            )
        ).status_code == 422
        assert (
            await client.patch(task_path, json={"assignee_id": invalid_assignee})
        ).status_code == 422
    assert (
        await owner.post(
            "/api/v1/tasks",
            json={
                "title": "Private",
                "assignee_id": str(accounts[1].id),
            },
        )
    ).status_code == 422


async def test_multiple_groups_and_task_filters(clients, accounts, group):
    owner, member, outsider = clients
    second = (await member.post("/api/v1/groups", json={"name": "Родители"})).json()
    owner_groups = (await owner.get("/api/v1/groups")).json()
    member_groups = (await member.get("/api/v1/groups")).json()
    assert {item["id"] for item in owner_groups} == {group["id"]}
    assert {item["id"] for item in member_groups} == {group["id"], second["id"]}
    assert (await outsider.get("/api/v1/groups")).json() == []

    private = (await member.post("/api/v1/tasks", json={"title": "Private"})).json()
    shared = (
        await owner.post(
            "/api/v1/tasks",
            json={
                "title": "Shared",
                "group_id": group["id"],
                "assignee_id": str(accounts[1].id),
            },
        )
    ).json()
    other = (
        await member.post(
            "/api/v1/tasks",
            json={
                "title": "Other group",
                "group_id": second["id"],
            },
        )
    ).json()
    await member.patch(f"/api/v1/tasks/{shared['id']}", json={"status": "in_progress"})
    assert {item["id"] for item in (await member.get("/api/v1/tasks")).json()} == {
        private["id"],
        shared["id"],
        other["id"],
    }
    assert {item["id"] for item in (await owner.get("/api/v1/tasks")).json()} == {shared["id"]}
    for params in [
        {"group_id": group["id"]},
        {"status": "in_progress"},
        {"assignee_id": str(accounts[1].id)},
        {"group_id": group["id"], "status": "in_progress", "assignee_id": str(accounts[1].id)},
    ]:
        response = await member.get("/api/v1/tasks", params=params)
        assert response.status_code == 200
        assert [item["id"] for item in response.json()] == [shared["id"]]


async def test_group_composition_is_managed_only_by_owner(clients, accounts, group):
    owner, member, _ = clients
    path = f"/api/v1/groups/{group['id']}"
    members = (await member.get(path + "/members")).json()
    assert {item["id"] for item in members} == {str(item.id) for item in accounts[:2]}
    assert all(set(item) == {"id", "login", "created_at"} for item in members)
    assert (await member.delete(path)).status_code == 403
    assert (await member.post(path + "/invitation")).status_code == 403
    assert (await member.delete(path + "/invitation")).status_code == 403
    assert (await member.delete(path + f"/members/{accounts[0].id}")).status_code == 403
    assert (await owner.post(path + "/leave")).status_code == 409
    assert (await owner.delete(path + f"/members/{accounts[0].id}")).status_code == 409


async def test_invitation_preview_acceptance_rotation_and_revocation(clients, accounts, database):
    owner, member, outsider = clients
    group = (await owner.post("/api/v1/groups", json={"name": "По приглашению"})).json()
    path = f"/api/v1/groups/{group['id']}/invitation"
    invitation = (await owner.post(path)).json()
    token = invitation["token"]
    token_path = f"/api/v1/invitations/{token}"
    async with database.session_factory() as db:
        stored = await db.get(GroupInvitation, UUID(group["id"]))
        assert stored.token_hash == token_hash(token)
        assert token not in vars(stored).values()
    assert (await member.get(token_path)).json() == {"group_id": group["id"], "name": group["name"]}
    assert (await member.get("/api/v1/groups")).json() == []
    # Preview never joins; accepting twice is safe; the same link works for another user.
    for client in (member, member, outsider):
        assert (await client.post(token_path + "/accept")).status_code == 200
    members = (await owner.get(f"/api/v1/groups/{group['id']}/members")).json()
    assert {item["id"] for item in members} == {str(item.id) for item in accounts}
    rotated = (await owner.post(path)).json()["token"]
    assert rotated != token
    assert (await member.get(token_path)).status_code == 404
    assert (await member.post(token_path + "/accept")).status_code == 404
    assert (await member.get(f"/api/v1/invitations/{rotated}")).status_code == 200
    assert (await owner.delete(path)).status_code == 204
    assert (await member.post(f"/api/v1/invitations/{rotated}/accept")).status_code == 404
    assert (await member.get("/api/v1/invitations/invalid")).status_code == 404


@pytest.mark.parametrize("operation", ["leave", "exclude"])
async def test_departure_retains_tasks_and_unassigns_only_unfinished(
    clients, accounts, group, operation
):
    owner, member, _ = clients
    created = []
    for status in ("open", "in_progress", "completed"):
        response = await member.post(
            "/api/v1/tasks",
            json={
                "title": status,
                "group_id": group["id"],
                "assignee_id": str(accounts[1].id),
            },
        )
        task = response.json()
        if status != "open":
            await member.patch(f"/api/v1/tasks/{task['id']}", json={"status": status})
        created.append(task)
    private = (await member.post("/api/v1/tasks", json={"title": "Private"})).json()
    path = f"/api/v1/groups/{group['id']}"
    if operation == "leave":
        response = await member.post(path + "/leave")
    else:
        response = await owner.delete(path + f"/members/{accounts[1].id}")
    assert response.status_code == 204
    for task in created:
        task_path = f"/api/v1/tasks/{task['id']}"
        saved = (await owner.get(task_path)).json()
        assert saved["creator_id"] == str(accounts[1].id)
        expected = str(accounts[1].id) if saved["status"] == "completed" else None
        assert saved["assignee_id"] == expected
        assert (await member.get(task_path)).status_code == 404
        assert (await member.patch(task_path, json={"title": "Forbidden"})).status_code == 404
    assert (await member.get(path)).status_code == 404
    assert (await member.get("/api/v1/groups")).json() == []
    assert [item["id"] for item in (await member.get("/api/v1/tasks")).json()] == [private["id"]]


async def test_group_deletion_cascades_without_deleting_accounts(
    clients, accounts, group, database
):
    owner, member, _ = clients
    invitation = (await owner.post(f"/api/v1/groups/{group['id']}/invitation")).json()
    private = (await member.post("/api/v1/tasks", json={"title": "Private"})).json()
    for status in ("open", "completed"):
        task = (
            await member.post(
                "/api/v1/tasks",
                json={
                    "title": status,
                    "group_id": group["id"],
                },
            )
        ).json()
        if status == "completed":
            await member.patch(f"/api/v1/tasks/{task['id']}", json={"status": status})
    assert (await owner.delete(f"/api/v1/groups/{group['id']}")).status_code == 204
    async with database.session_factory() as db:
        assert await db.get(Group, UUID(group["id"])) is None
        assert await db.get(GroupInvitation, UUID(group["id"])) is None
        for model in (GroupMember, Task):
            stmt = select(model).where(model.group_id == UUID(group["id"]))
            result = await db.execute(stmt)
            assert list(result.scalars().all()) == []
    for client, account in zip(clients, accounts, strict=True):
        assert (await client.get("/api/v1/auth/me")).json()["id"] == str(account.id)
    assert (await member.get(f"/api/v1/tasks/{private['id']}")).status_code == 200
    assert (await member.get(f"/api/v1/invitations/{invitation['token']}")).status_code == 404


async def test_tracker_requires_authentication(clients, group):
    owner, _, _ = clients
    invitation = (await owner.post(f"/api/v1/groups/{group['id']}/invitation")).json()
    task = (await owner.post("/api/v1/tasks", json={"title": "Private"})).json()
    async with httpx.AsyncClient(transport=owner._transport, base_url=owner.base_url) as anonymous:
        enable_csrf(anonymous)
        for method, path, body in [
            ("GET", "/api/v1/tasks", None),
            ("POST", "/api/v1/tasks", {"title": "Forbidden"}),
            ("PATCH", f"/api/v1/tasks/{task['id']}", {"title": "Forbidden"}),
            ("DELETE", f"/api/v1/tasks/{task['id']}", None),
            ("GET", "/api/v1/groups", None),
            ("POST", "/api/v1/groups", {"name": "Forbidden"}),
            ("GET", f"/api/v1/invitations/{invitation['token']}", None),
            ("POST", f"/api/v1/invitations/{invitation['token']}/accept", None),
        ]:
            response = await anonymous.request(method, path, json=body)
            assert response.status_code == 401


async def test_task_api_validates_updates(clients):
    owner, _, _ = clients
    task = (await owner.post("/api/v1/tasks", json={"title": "Valid"})).json()
    path = f"/api/v1/tasks/{task['id']}"
    for changes in [
        {"title": None},
        {"title": "  "},
        {"priority": None},
        {"status": None},
        {"status": "cancelled"},
        {"priority": "urgent"},
        {"creator_id": str(uuid4())},
        {"group_id": str(uuid4())},
        {"assignee_id": "invalid"},
    ]:
        assert (await owner.patch(path, json=changes)).status_code == 422
    assert (await owner.get(path)).json()["title"] == "Valid"


async def test_concurrent_completion_prevents_later_edits(database, accounts):
    user = accounts[0]
    async with database.session_factory() as db:
        task = await TaskService(db).create(user.id, TaskCreate(title="Complete concurrently"))
    async with database.session_factory() as complete_db, database.session_factory() as edit_db:
        complete, edit = TaskService(complete_db), TaskService(edit_db)
        complete_ready, resume_complete, edit_waiting = (
            asyncio.Event(),
            asyncio.Event(),
            asyncio.Event(),
        )
        original_commit = complete_db.commit
        original_get = edit.tasks.by_id

        async def delayed_commit():
            complete_ready.set()
            await resume_complete.wait()
            await original_commit()

        async def observed_get(*args, **kwargs):
            if kwargs.get("for_update"):
                edit_waiting.set()
            return await original_get(*args, **kwargs)

        complete_db.commit = delayed_commit
        edit.tasks.by_id = observed_get
        completing = asyncio.create_task(
            complete.update(user.id, task.id, TaskUpdate(status=TaskStatus.COMPLETED))
        )
        editing = None
        try:
            await asyncio.wait_for(complete_ready.wait(), timeout=5)
            editing = asyncio.create_task(
                edit.update(user.id, task.id, TaskUpdate(title="Forbidden"))
            )
            await asyncio.wait_for(edit_waiting.wait(), timeout=5)
            resume_complete.set()
            await asyncio.wait_for(completing, timeout=5)
            with pytest.raises(TaskCompletedError):
                await asyncio.wait_for(editing, timeout=5)
        finally:
            resume_complete.set()
            pending = [item for item in (completing, editing) if item is not None]
            for item in pending:
                if not item.done():
                    item.cancel()
            await asyncio.gather(*pending, return_exceptions=True)
    async with database.session_factory() as db:
        saved = await db.get(Task, task.id)
        assert saved.title == task.title
        assert saved.status == TaskStatus.COMPLETED


@pytest.mark.parametrize("operation", ["revoke", "remove"])
async def test_group_changes_cannot_be_bypassed_by_waiting_requests(
    database, accounts, clients, group, operation
):
    owner, _, _ = clients
    invitation = (await owner.post(f"/api/v1/groups/{group['id']}/invitation")).json()
    group_id = UUID(group["id"])
    async with database.session_factory() as change_db, database.session_factory() as request_db:
        change = GroupService(change_db)
        ready, resume, waiting = asyncio.Event(), asyncio.Event(), asyncio.Event()
        original_commit = change_db.commit

        async def delayed_commit():
            ready.set()
            await resume.wait()
            await original_commit()

        change_db.commit = delayed_commit
        if operation == "revoke":
            service = GroupService(request_db)
            action = change.revoke_invitation(accounts[0].id, group_id)
            request = service.accept_invitation(accounts[2].id, invitation["token"])
            expected = InvitationNotFoundError
        else:
            service = TaskService(request_db)
            action = change.remove_member(accounts[0].id, group_id, accounts[1].id)
            request = service.create(
                accounts[1].id, TaskCreate(title="Forbidden", group_id=group_id)
            )
            expected = GroupNotFoundError
        original_get = service.groups.by_id

        async def observed_get(*args, **kwargs):
            if kwargs.get("for_update"):
                waiting.set()
            return await original_get(*args, **kwargs)

        service.groups.by_id = observed_get
        changing = asyncio.create_task(action)
        requesting = None
        try:
            await asyncio.wait_for(ready.wait(), timeout=5)
            requesting = asyncio.create_task(request)
            await asyncio.wait_for(waiting.wait(), timeout=5)
            resume.set()
            await asyncio.wait_for(changing, timeout=5)
            with pytest.raises(expected):
                await asyncio.wait_for(requesting, timeout=5)
        finally:
            resume.set()
            pending = [item for item in (changing, requesting) if item is not None]
            for item in pending:
                if not item.done():
                    item.cancel()
            await asyncio.gather(*pending, return_exceptions=True)
