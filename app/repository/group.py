from uuid import UUID

from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.group import Group, GroupMember


class GroupRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    def add(self, group: Group) -> None:
        self.db.add(group)

    def add_member(self, member: GroupMember) -> None:
        self.db.add(member)

    async def by_id(self, group_id: UUID, *, for_update: bool = False) -> Group | None:
        if for_update:
            return await self.db.get(Group, group_id, with_for_update=True, populate_existing=True)
        return await self.db.get(Group, group_id)

    async def by_member(
        self, group_id: UUID, user_id: UUID, *, for_update: bool = False
    ) -> Group | None:
        group = await self.by_id(group_id, for_update=for_update)
        if group is None:
            return None
        # Read membership after acquiring the group lock, so a concurrent removal wins.
        member = await self.member(group_id, user_id)
        if member is None:
            return None
        return group

    async def for_user(self, user_id: UUID) -> list[Group]:
        member_groups = select(GroupMember.group_id).where(GroupMember.user_id == user_id)
        stmt = (
            select(Group)
            .where(Group.id.in_(member_groups))
            .order_by(Group.created_at, Group.id)
        )
        result = await self.db.execute(stmt)
        return list(result.scalars().all())

    async def member(self, group_id: UUID, user_id: UUID) -> GroupMember | None:
        return await self.db.get(GroupMember, (group_id, user_id), populate_existing=True)

    async def members(self, group_id: UUID) -> list[GroupMember]:
        stmt = (
            select(GroupMember)
            .where(GroupMember.group_id == group_id)
            .order_by(GroupMember.user_id)
        )
        result = await self.db.execute(stmt)
        return list(result.scalars().all())

    async def remove_member(self, group_id: UUID, user_id: UUID) -> None:
        stmt = delete(GroupMember).where(
            GroupMember.group_id == group_id, GroupMember.user_id == user_id
        )
        await self.db.execute(stmt)

    async def delete(self, group_id: UUID) -> None:
        stmt = delete(Group).where(Group.id == group_id)
        await self.db.execute(stmt)
