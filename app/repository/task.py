from uuid import UUID

from sqlalchemy import and_, delete, or_, select, update
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.group import GroupMember
from app.models.task import Task, TaskStatus


class TaskRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    def add(self, task: Task) -> None:
        self.db.add(task)

    async def by_id(self, task_id: UUID, *, for_update: bool = False) -> Task | None:
        if for_update:
            return await self.db.get(Task, task_id, with_for_update=True, populate_existing=True)
        return await self.db.get(Task, task_id)

    async def for_user(
        self,
        user_id: UUID,
        *,
        group_id: UUID | None = None,
        status: TaskStatus | None = None,
        assignee_id: UUID | None = None,
    ) -> list[Task]:
        member_groups = select(GroupMember.group_id).where(GroupMember.user_id == user_id)
        stmt = select(Task).where(
            or_(
                and_(Task.group_id.is_(None), Task.creator_id == user_id),
                Task.group_id.in_(member_groups),
            )
        )
        if group_id is not None:
            stmt = stmt.where(Task.group_id == group_id)
        if status is not None:
            stmt = stmt.where(Task.status == status)
        if assignee_id is not None:
            stmt = stmt.where(Task.assignee_id == assignee_id)
        stmt = stmt.order_by(Task.created_at.desc(), Task.id)
        result = await self.db.execute(stmt)
        return list(result.scalars().all())

    async def unassign_unfinished(self, group_id: UUID, user_id: UUID) -> None:
        stmt = (
            update(Task)
            .where(
                Task.group_id == group_id,
                Task.assignee_id == user_id,
                Task.status != TaskStatus.COMPLETED,
            )
            .values(assignee_id=None)
        )
        await self.db.execute(stmt)

    async def delete(self, task_id: UUID) -> None:
        stmt = delete(Task).where(Task.id == task_id)
        await self.db.execute(stmt)
