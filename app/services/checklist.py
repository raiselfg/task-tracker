from uuid import UUID, uuid4

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import utc_now
from app.models.checklist import Checklist, ChecklistItem
from app.repository.checklist import ChecklistRepository
from app.repository.group import GroupRepository
from app.schemas.checklist import (
    ChecklistCreate,
    ChecklistDetail,
    ChecklistItemCreate,
    ChecklistItemUpdate,
    ChecklistRead,
    ChecklistUpdate,
)
from app.services.group import GroupNotFoundError


class ChecklistNotFoundError(Exception):
    pass


class ChecklistItemNotFoundError(Exception):
    pass


class ChecklistService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.checklists = ChecklistRepository(db)
        self.groups = GroupRepository(db)

    async def create(self, user_id: UUID, body: ChecklistCreate) -> Checklist:
        if body.group_id is not None:
            group = await self.groups.by_member(body.group_id, user_id, for_update=True)
            if group is None:
                raise GroupNotFoundError("Group not found")
        checklist = Checklist(
            id=uuid4(), creator_id=user_id, created_at=utc_now(), **body.model_dump()
        )
        self.checklists.add(checklist)
        await self.db.commit()
        return checklist

    async def list(self, user_id: UUID, *, group_id: UUID | None = None) -> list[Checklist]:
        if group_id is not None:
            group = await self.groups.by_member(group_id, user_id)
            if group is None:
                raise GroupNotFoundError("Group not found")
        return await self.checklists.for_user(user_id, group_id=group_id)

    async def get(
        self, user_id: UUID, checklist_id: UUID, *, for_update: bool = False
    ) -> Checklist:
        checklist = await self.checklists.by_id(checklist_id)
        if checklist is None:
            raise ChecklistNotFoundError("Checklist not found")
        if checklist.group_id is None:
            if checklist.creator_id != user_id:
                raise ChecklistNotFoundError("Checklist not found")
        else:
            # Match task writes: lock the group before the checklist and recheck membership.
            group = await self.groups.by_member(checklist.group_id, user_id, for_update=for_update)
            if group is None:
                raise ChecklistNotFoundError("Checklist not found")
        if for_update:
            checklist = await self.checklists.by_id(checklist_id, for_update=True)
            if checklist is None:
                raise ChecklistNotFoundError("Checklist not found")
        return checklist

    async def detail(self, user_id: UUID, checklist_id: UUID) -> ChecklistDetail:
        checklist = await self.get(user_id, checklist_id)
        items = await self.checklists.items(checklist_id)
        return ChecklistDetail(**ChecklistRead.model_validate(checklist).model_dump(), items=items)

    async def update(self, user_id: UUID, checklist_id: UUID, body: ChecklistUpdate) -> Checklist:
        checklist = await self.get(user_id, checklist_id, for_update=True)
        checklist.title = body.title
        await self.db.commit()
        return checklist

    async def delete(self, user_id: UUID, checklist_id: UUID) -> None:
        await self.get(user_id, checklist_id, for_update=True)
        await self.checklists.delete(checklist_id)
        await self.db.commit()

    async def add_item(
        self, user_id: UUID, checklist_id: UUID, body: ChecklistItemCreate
    ) -> ChecklistItem:
        await self.get(user_id, checklist_id, for_update=True)
        item = ChecklistItem(
            id=uuid4(),
            checklist_id=checklist_id,
            title=body.title,
            checked=False,
            created_at=utc_now(),
        )
        self.checklists.add_item(item)
        await self.db.commit()
        return item

    async def _item(self, user_id: UUID, checklist_id: UUID, item_id: UUID) -> ChecklistItem:
        await self.get(user_id, checklist_id, for_update=True)
        item = await self.checklists.item_by_id(item_id)
        if item is None or item.checklist_id != checklist_id:
            raise ChecklistItemNotFoundError("Checklist item not found")
        return item

    async def update_item(
        self, user_id: UUID, checklist_id: UUID, item_id: UUID, body: ChecklistItemUpdate
    ) -> ChecklistItem:
        item = await self._item(user_id, checklist_id, item_id)
        for field, value in body.model_dump(exclude_unset=True).items():
            setattr(item, field, value)
        await self.db.commit()
        return item

    async def delete_item(self, user_id: UUID, checklist_id: UUID, item_id: UUID) -> None:
        await self._item(user_id, checklist_id, item_id)
        await self.checklists.delete_item(item_id)
        await self.db.commit()
