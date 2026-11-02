from uuid import UUID

from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.group import GroupInvitation


class InvitationRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    def add(self, invitation: GroupInvitation) -> None:
        self.db.add(invitation)

    async def by_group(self, group_id: UUID) -> GroupInvitation | None:
        return await self.db.get(GroupInvitation, group_id)

    async def by_hash(self, digest: str) -> GroupInvitation | None:
        stmt = select(GroupInvitation).where(GroupInvitation.token_hash == digest)
        result = await self.db.execute(stmt)
        return result.scalar_one_or_none()

    async def delete(self, group_id: UUID) -> None:
        stmt = delete(GroupInvitation).where(GroupInvitation.group_id == group_id)
        await self.db.execute(stmt)
