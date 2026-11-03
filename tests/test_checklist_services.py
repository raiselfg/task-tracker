from unittest.mock import AsyncMock
from uuid import uuid4

import pytest
from pydantic import ValidationError
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.checklist import Checklist, ChecklistItem
from app.repository.checklist import ChecklistRepository
from app.repository.group import GroupRepository
from app.schemas.checklist import (
    ChecklistCreate,
    ChecklistItemCreate,
    ChecklistItemUpdate,
    ChecklistUpdate,
)
from app.services.checklist import (
    ChecklistItemNotFoundError,
    ChecklistNotFoundError,
    ChecklistService,
)
from app.services.group import GroupNotFoundError


@pytest.fixture
def checklists():
    service = ChecklistService(AsyncMock(spec=AsyncSession))
    service.checklists = AsyncMock(spec=ChecklistRepository)
    service.groups = AsyncMock(spec=GroupRepository)
    return service


@pytest.mark.parametrize(
    "operation", ["get", "update", "delete", "add_item", "update_item", "delete_item"]
)
async def test_personal_checklist_is_private(checklists, operation):
    checklist = Checklist(id=uuid4(), creator_id=uuid4(), group_id=None)
    checklists.checklists.by_id.return_value = checklist
    args = [uuid4(), checklist.id]
    if operation == "update":
        args.append(ChecklistUpdate(title="Changed"))
    if operation == "add_item":
        args.append(ChecklistItemCreate(title="Milk"))
    if operation in {"update_item", "delete_item"}:
        args.append(uuid4())
    if operation == "update_item":
        args.append(ChecklistItemUpdate(checked=True))
    with pytest.raises(ChecklistNotFoundError):
        await getattr(checklists, operation)(*args)
    checklists.db.commit.assert_not_awaited()
    checklists.checklists.item_by_id.assert_not_awaited()


async def test_group_access_is_rechecked_under_lock_before_item_write(checklists):
    checklist = Checklist(id=uuid4(), creator_id=uuid4(), group_id=uuid4())
    checklists.checklists.by_id.return_value = checklist
    checklists.groups.by_member.return_value = None
    user_id = uuid4()
    with pytest.raises(ChecklistNotFoundError):
        await checklists.add_item(user_id, checklist.id, ChecklistItemCreate(title="Milk"))
    checklists.groups.by_member.assert_awaited_once_with(
        checklist.group_id, user_id, for_update=True
    )
    checklists.checklists.add_item.assert_not_called()
    checklists.db.commit.assert_not_awaited()


@pytest.mark.parametrize("operation", ["create", "list"])
async def test_cannot_use_an_unavailable_group(checklists, operation):
    checklists.groups.by_member.return_value = None
    with pytest.raises(GroupNotFoundError):
        if operation == "create":
            await checklists.create(uuid4(), ChecklistCreate(title="List", group_id=uuid4()))
        else:
            await checklists.list(uuid4(), group_id=uuid4())
    checklists.checklists.add.assert_not_called()
    checklists.db.commit.assert_not_awaited()


async def test_item_id_must_belong_to_requested_checklist(checklists):
    checklist = Checklist(id=uuid4(), creator_id=uuid4(), group_id=None)
    item = ChecklistItem(id=uuid4(), checklist_id=uuid4(), title="Other list", checked=False)
    checklists.checklists.by_id.return_value = checklist
    checklists.checklists.item_by_id.return_value = item
    with pytest.raises(ChecklistItemNotFoundError):
        await checklists.update_item(
            checklist.creator_id, checklist.id, item.id, ChecklistItemUpdate(checked=True)
        )
    assert item.checked is False
    checklists.db.commit.assert_not_awaited()


async def test_checked_items_can_be_unchecked_without_overwriting_their_title(checklists):
    checklist = Checklist(id=uuid4(), creator_id=uuid4(), group_id=None)
    item = ChecklistItem(id=uuid4(), checklist_id=checklist.id, title="Milk", checked=True)
    checklists.checklists.by_id.return_value = checklist
    checklists.checklists.item_by_id.return_value = item
    result = await checklists.update_item(
        checklist.creator_id, checklist.id, item.id, ChecklistItemUpdate(checked=False)
    )
    assert result.checked is False
    assert result.title == "Milk"
    checklists.db.commit.assert_awaited_once()


@pytest.mark.parametrize(
    "schema", [ChecklistCreate, ChecklistUpdate, ChecklistItemCreate, ChecklistItemUpdate]
)
@pytest.mark.parametrize("title", ["", " \n\t", None])
def test_blank_and_null_titles_are_rejected(schema, title):
    with pytest.raises(ValidationError):
        schema(title=title)


def test_cannot_move_checklists_or_clear_a_checkbox_to_null():
    with pytest.raises(ValidationError):
        ChecklistUpdate(title="Title", group_id=uuid4())
    with pytest.raises(ValidationError):
        ChecklistItemUpdate(checked=None)
