from unittest.mock import AsyncMock
from uuid import uuid4

import pytest
from pydantic import ValidationError
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import new_token
from app.models.group import Group, GroupInvitation
from app.models.task import Task, TaskPriority, TaskStatus
from app.repository.group import GroupRepository
from app.repository.invitation import InvitationRepository
from app.repository.task import TaskRepository
from app.schemas.group import GroupCreate
from app.schemas.task import TaskCreate, TaskUpdate
from app.services.group import (
    GroupOwnerRequiredError,
    GroupService,
    InvitationNotFoundError,
    OwnerCannotLeaveError,
)
from app.services.task import (
    InvalidAssigneeError,
    TaskCompletedError,
    TaskNotFoundError,
    TaskService,
)


@pytest.fixture
def tasks():
    service = TaskService(AsyncMock(spec=AsyncSession))
    service.tasks = AsyncMock(spec=TaskRepository)
    service.groups = AsyncMock(spec=GroupRepository)
    return service


@pytest.fixture
def groups():
    service = GroupService(AsyncMock(spec=AsyncSession))
    service.groups = AsyncMock(spec=GroupRepository)
    service.invitations = AsyncMock(spec=InvitationRepository)
    service.tasks = AsyncMock(spec=TaskRepository)
    return service


@pytest.mark.parametrize("operation", ["get", "update", "delete"])
async def test_personal_task_is_private(tasks, operation):
    task = Task(id=uuid4(), creator_id=uuid4(), group_id=None, status=TaskStatus.OPEN)
    tasks.tasks.by_id.return_value = task
    args = (uuid4(), task.id)
    if operation == "update":
        args += (TaskUpdate(title="Other title"),)
    with pytest.raises(TaskNotFoundError):
        await getattr(tasks, operation)(*args)
    tasks.db.commit.assert_not_awaited()
    tasks.tasks.delete.assert_not_awaited()


@pytest.mark.parametrize(
    "changes",
    [
        {"title": "Changed"},
        {"description": None},
        {"priority": "low"},
        {"status": "open"},
        {"assignee_id": None},
        {},
        None,
    ],
)
async def test_completed_task_allows_only_reading(tasks, changes):
    task = Task(id=uuid4(), creator_id=uuid4(), group_id=None, status=TaskStatus.COMPLETED)
    tasks.tasks.by_id.return_value = task
    assert await tasks.get(task.creator_id, task.id) is task
    with pytest.raises(TaskCompletedError):
        if changes is None:
            await tasks.delete(task.creator_id, task.id)
        else:
            await tasks.update(task.creator_id, task.id, TaskUpdate(**changes))
    assert task.status == TaskStatus.COMPLETED
    tasks.db.commit.assert_not_awaited()
    tasks.tasks.delete.assert_not_awaited()


async def test_personal_task_cannot_be_assigned_to_another_user(tasks):
    with pytest.raises(InvalidAssigneeError):
        await tasks.create(uuid4(), TaskCreate(title="Private", assignee_id=uuid4()))
    tasks.tasks.add.assert_not_called()
    tasks.db.commit.assert_not_awaited()


async def test_group_task_assignee_must_be_a_member(tasks):
    tasks.groups.member.return_value = None
    with pytest.raises(InvalidAssigneeError):
        await tasks.create(
            uuid4(), TaskCreate(title="Shared", group_id=uuid4(), assignee_id=uuid4())
        )
    tasks.tasks.add.assert_not_called()
    tasks.db.commit.assert_not_awaited()


async def test_partial_update_can_clear_optional_fields(tasks):
    task = Task(
        id=uuid4(),
        creator_id=uuid4(),
        group_id=None,
        title="Keep title",
        description="Clear description",
        assignee_id=uuid4(),
        status=TaskStatus.IN_PROGRESS,
        priority=TaskPriority.HIGH,
    )
    tasks.tasks.by_id.return_value = task
    result = await tasks.update(
        task.creator_id, task.id, TaskUpdate(description=None, assignee_id=None)
    )
    assert result.description is None
    assert result.assignee_id is None
    assert result.title == "Keep title"
    assert result.status == TaskStatus.IN_PROGRESS
    assert result.priority == TaskPriority.HIGH
    tasks.db.commit.assert_awaited_once()


@pytest.mark.parametrize(
    "method", ["delete", "create_invitation", "revoke_invitation", "remove_member"]
)
async def test_only_owner_can_manage_group(groups, method):
    group = Group(id=uuid4(), owner_id=uuid4())
    groups.groups.by_member.return_value = group
    args = (uuid4(), group.id)
    if method == "remove_member":
        args += (uuid4(),)
    with pytest.raises(GroupOwnerRequiredError):
        await getattr(groups, method)(*args)
    groups.db.commit.assert_not_awaited()
    groups.groups.delete.assert_not_awaited()
    groups.groups.remove_member.assert_not_awaited()
    groups.invitations.add.assert_not_called()
    groups.invitations.delete.assert_not_awaited()


@pytest.mark.parametrize("method", ["leave", "remove_member"])
async def test_owner_cannot_leave_or_remove_self(groups, method):
    group = Group(id=uuid4(), owner_id=uuid4())
    groups.groups.by_member.return_value = group
    args = (group.owner_id, group.id)
    if method == "remove_member":
        args += (group.owner_id,)
    with pytest.raises(OwnerCannotLeaveError):
        await getattr(groups, method)(*args)
    groups.db.commit.assert_not_awaited()
    groups.tasks.unassign_unfinished.assert_not_awaited()
    groups.groups.remove_member.assert_not_awaited()


@pytest.mark.parametrize("token", ["", "invalid", "я" * 43])
async def test_invalid_invitation_does_not_reach_database(groups, token):
    with pytest.raises(InvitationNotFoundError):
        await groups.accept_invitation(uuid4(), token)
    groups.invitations.by_hash.assert_not_awaited()
    groups.db.commit.assert_not_awaited()


async def test_invitation_is_rechecked_after_locking_group(groups):
    group = Group(id=uuid4())
    groups.invitations.by_hash.side_effect = [GroupInvitation(group_id=group.id), None]
    groups.groups.by_id.return_value = group
    with pytest.raises(InvitationNotFoundError):
        await groups.accept_invitation(uuid4(), new_token())
    groups.groups.add_member.assert_not_called()
    groups.db.commit.assert_not_awaited()


@pytest.mark.parametrize("schema,field", [(TaskCreate, "title"), (GroupCreate, "name")])
@pytest.mark.parametrize("value", ["", "   ", "\n\t"])
def test_names_cannot_be_blank(schema, field, value):
    with pytest.raises(ValidationError):
        schema(**{field: value})


@pytest.mark.parametrize("field", ["title", "priority", "status"])
def test_required_task_fields_cannot_be_cleared(field):
    with pytest.raises(ValidationError):
        TaskUpdate(**{field: None})
