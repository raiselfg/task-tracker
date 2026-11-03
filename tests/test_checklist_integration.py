"""Checklist API, privacy and group access against a dedicated PostgreSQL database."""

import asyncio
import os
from uuid import UUID

import httpx
import pytest

from app.models.checklist import Checklist, ChecklistItem
from app.schemas.checklist import ChecklistItemUpdate
from app.services.checklist import ChecklistNotFoundError, ChecklistService
from app.services.group import GroupService
from tests.fakes import enable_csrf
from tests.test_tracker_integration import accounts as accounts
from tests.test_tracker_integration import clients as clients
from tests.test_tracker_integration import database as database
from tests.test_tracker_integration import group as group
from tests.test_tracker_integration import migrate_database as migrate_database
from tests.test_tracker_integration import register as register
from tests.test_tracker_integration import settings as settings

pytestmark = pytest.mark.skipif(
    not os.getenv("AUTH_TEST_DATABASE_URL"),
    reason="Set AUTH_TEST_DATABASE_URL to a dedicated test database",
)


async def test_personal_checklist_and_items_lifecycle(clients):
    owner, other, _ = clients
    response = await owner.post("/api/v1/checklists", json={"title": "Магазин"})
    assert response.status_code == 201
    checklist = response.json()
    assert checklist["group_id"] is None
    path = f"/api/v1/checklists/{checklist['id']}"
    assert (await owner.get(path)).json()["items"] == []
    assert checklist["id"] not in {
        row["id"] for row in (await other.get("/api/v1/checklists")).json()
    }
    for method, suffix, body in [
        ("GET", "", None),
        ("PATCH", "", {"title": "Other"}),
        ("DELETE", "", None),
        ("POST", "/items", {"title": "Other"}),
    ]:
        result = await other.request(method, path + suffix, json=body)
        assert result.status_code == 404
    item = await owner.post(path + "/items", json={"title": "Молоко"})
    assert item.status_code == 201
    milk = item.json()
    assert milk["checked"] is False
    bread = (await owner.post(path + "/items", json={"title": "Хлеб"})).json()
    items = (await owner.get(path)).json()["items"]
    assert [row["id"] for row in items] == [milk["id"], bread["id"]]
    item_path = path + f"/items/{milk['id']}"
    for checked in [True, False]:
        result = await owner.patch(item_path, json={"checked": checked})
        assert result.status_code == 200
        assert result.json()["checked"] is checked
        assert (await owner.get(path)).json()["items"][0]["checked"] is checked
    assert (await owner.patch(item_path, json={"title": "Молоко 2 л"})).json()[
        "title"
    ] == "Молоко 2 л"
    assert (await owner.patch(path, json={"title": "Продукты"})).json()["title"] == "Продукты"
    assert (await other.patch(item_path, json={"checked": True})).status_code == 404
    assert (await other.delete(item_path)).status_code == 404
    assert (await owner.delete(item_path)).status_code == 204
    assert [row["id"] for row in (await owner.get(path)).json()["items"]] == [bread["id"]]
    assert (await owner.delete(path)).status_code == 204
    assert (await owner.get(path)).status_code == 404


async def test_checklists_require_a_session_even_with_valid_csrf(clients):
    from app.main import app

    async with httpx.AsyncClient(
        transport=httpx.ASGITransport(app=app), base_url="https://api.example.com"
    ) as anonymous:
        enable_csrf(anonymous)
        assert (await anonymous.get("/api/v1/checklists")).status_code == 401
        assert (
            await anonymous.post("/api/v1/checklists", json={"title": "No session"})
        ).status_code == 401


async def test_all_family_members_can_edit_but_outsiders_and_removed_members_cannot(clients, group):
    owner, member, outsider = clients
    response = await member.post(
        "/api/v1/checklists", json={"title": "Поход", "group_id": group["id"]}
    )
    assert response.status_code == 201
    checklist = response.json()
    path = f"/api/v1/checklists/{checklist['id']}"
    for client in [owner, member]:
        result = await client.get("/api/v1/checklists", params={"group_id": group["id"]})
        assert checklist["id"] in {row["id"] for row in result.json()}
    assert (await outsider.get(path)).status_code == 404
    assert (
        await outsider.get("/api/v1/checklists", params={"group_id": group["id"]})
    ).status_code == 404
    assert (
        await outsider.post("/api/v1/checklists", json={"title": "No", "group_id": group["id"]})
    ).status_code == 404
    item = (await owner.post(path + "/items", json={"title": "Вода"})).json()
    item_path = path + f"/items/{item['id']}"
    assert (await member.patch(item_path, json={"checked": True})).json()["checked"] is True
    assert (await owner.get(path)).json()["items"][0]["checked"] is True
    assert (await member.patch(item_path, json={"checked": False})).json()["checked"] is False
    assert (await owner.patch(path, json={"title": "Поездка"})).status_code == 200
    assert (await member.post(f"/api/v1/groups/{group['id']}/leave")).status_code == 204
    for method, suffix, body in [
        ("GET", "", None),
        ("DELETE", "", None),
        ("PATCH", "", {"title": "No"}),
        ("POST", "/items", {"title": "No"}),
        ("PATCH", f"/items/{item['id']}", {"checked": True}),
        ("DELETE", f"/items/{item['id']}", None),
    ]:
        assert (await member.request(method, path + suffix, json=body)).status_code == 404
    assert checklist["id"] not in {
        row["id"] for row in (await member.get("/api/v1/checklists")).json()
    }
    # Any remaining member may delete the list, even when somebody else created it.
    assert (await owner.delete(path)).status_code == 204


async def test_item_ids_cannot_be_used_in_another_checklist_and_group_delete_cascades(
    clients, group, database
):
    owner, member, _ = clients
    first = (
        await owner.post("/api/v1/checklists", json={"title": "First", "group_id": group["id"]})
    ).json()
    second = (await owner.post("/api/v1/checklists", json={"title": "Second"})).json()
    item = (
        await owner.post(f"/api/v1/checklists/{first['id']}/items", json={"title": "Item"})
    ).json()
    wrong_path = f"/api/v1/checklists/{second['id']}/items/{item['id']}"
    assert (await owner.patch(wrong_path, json={"checked": True})).status_code == 404
    assert (await owner.delete(wrong_path)).status_code == 404
    assert (await owner.delete(f"/api/v1/groups/{group['id']}")).status_code == 204
    assert (await member.get(f"/api/v1/checklists/{first['id']}")).status_code == 404
    async with database.session_factory() as db:
        assert await db.get(Checklist, UUID(first["id"])) is None
        assert await db.get(ChecklistItem, UUID(item["id"])) is None


@pytest.mark.parametrize("body", [{"title": ""}, {"title": " \n"}, {"title": None}])
async def test_invalid_checklist_titles_are_rejected(clients, body):
    assert (await clients[0].post("/api/v1/checklists", json=body)).status_code == 422


async def test_invalid_item_updates_and_csrf_are_rejected(clients):
    owner, _, _ = clients
    checklist = (await owner.post("/api/v1/checklists", json={"title": "List"})).json()
    path = f"/api/v1/checklists/{checklist['id']}"
    assert (await owner.post(path + "/items", json={"title": " "})).status_code == 422
    item = (await owner.post(path + "/items", json={"title": "Item"})).json()
    for changes in [
        {"title": None},
        {"checked": None},
        {"title": " "},
        {"checklist_id": checklist["id"]},
    ]:
        assert (await owner.patch(path + f"/items/{item['id']}", json=changes)).status_code == 422
    assert (await owner.patch(path, json={"title": "Changed", "group_id": None})).status_code == 422
    owner.event_hooks["request"].clear()
    assert (await owner.post(path + "/items", json={"title": "No token"})).status_code == 403


async def test_waiting_item_write_cannot_bypass_member_removal(database, accounts, clients, group):
    owner, _, _ = clients
    created = (
        await owner.post("/api/v1/checklists", json={"title": "Shared", "group_id": group["id"]})
    ).json()
    item = (
        await owner.post(f"/api/v1/checklists/{created['id']}/items", json={"title": "Milk"})
    ).json()
    async with database.session_factory() as change_db, database.session_factory() as write_db:
        groups = GroupService(change_db)
        checklists = ChecklistService(write_db)
        ready, resume, waiting = asyncio.Event(), asyncio.Event(), asyncio.Event()
        original_commit = change_db.commit
        original_get = checklists.groups.by_id

        async def delayed_commit():
            ready.set()
            await resume.wait()
            await original_commit()

        async def observed_get(*args, **kwargs):
            if kwargs.get("for_update"):
                waiting.set()
            return await original_get(*args, **kwargs)

        change_db.commit = delayed_commit
        checklists.groups.by_id = observed_get
        changing = asyncio.create_task(
            groups.remove_member(accounts[0].id, UUID(group["id"]), accounts[1].id)
        )
        writing = None
        try:
            await asyncio.wait_for(ready.wait(), timeout=5)
            writing = asyncio.create_task(
                checklists.update_item(
                    accounts[1].id,
                    UUID(created["id"]),
                    UUID(item["id"]),
                    ChecklistItemUpdate(checked=True),
                )
            )
            await asyncio.wait_for(waiting.wait(), timeout=5)
            resume.set()
            await asyncio.wait_for(changing, timeout=5)
            with pytest.raises(ChecklistNotFoundError):
                await asyncio.wait_for(writing, timeout=5)
        finally:
            resume.set()
            pending = [task for task in (changing, writing) if task is not None]
            for task in pending:
                if not task.done():
                    task.cancel()
            await asyncio.gather(*pending, return_exceptions=True)
    async with database.session_factory() as db:
        saved = await db.get(ChecklistItem, UUID(item["id"]))
        assert saved.checked is False
