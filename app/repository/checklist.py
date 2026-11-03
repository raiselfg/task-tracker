from uuid import UUID

from sqlalchemy import and_, delete, or_, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.checklist import Checklist, ChecklistItem
from app.models.group import GroupMember


class ChecklistRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    def add(self, checklist: Checklist) -> None:
        self.db.add(checklist)

    def add_item(self, item: ChecklistItem) -> None:
        self.db.add(item)

    async def by_id(self, checklist_id: UUID, *, for_update: bool = False) -> Checklist | None:
        if for_update:
            return await self.db.get(
                Checklist, checklist_id, with_for_update=True, populate_existing=True
            )
        return await self.db.get(Checklist, checklist_id)

    async def for_user(self, user_id: UUID, *, group_id: UUID | None = None) -> list[Checklist]:
        member_groups = select(GroupMember.group_id).where(GroupMember.user_id == user_id)
        stmt = select(Checklist).where(
            or_(
                and_(Checklist.group_id.is_(None), Checklist.creator_id == user_id),
                Checklist.group_id.in_(member_groups),
            )
        )
        if group_id is not None:
            stmt = stmt.where(Checklist.group_id == group_id)
        stmt = stmt.order_by(Checklist.created_at.desc(), Checklist.id)
        result = await self.db.execute(stmt)
        return list(result.scalars().all())

    async def items(self, checklist_id: UUID) -> list[ChecklistItem]:
        stmt = (
            select(ChecklistItem)
            .where(ChecklistItem.checklist_id == checklist_id)
            .order_by(ChecklistItem.created_at, ChecklistItem.id)
        )
        result = await self.db.execute(stmt)
        return list(result.scalars().all())

    async def item_by_id(self, item_id: UUID) -> ChecklistItem | None:
        return await self.db.get(ChecklistItem, item_id)

    async def delete(self, checklist_id: UUID) -> None:
        stmt = delete(Checklist).where(Checklist.id == checklist_id)
        await self.db.execute(stmt)

    async def delete_item(self, item_id: UUID) -> None:
        stmt = delete(ChecklistItem).where(ChecklistItem.id == item_id)
        await self.db.execute(stmt)
