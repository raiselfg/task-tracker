from uuid import UUID, uuid4

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import utc_now
from app.models.task import Task, TaskStatus
from app.repository.group import GroupRepository
from app.repository.task import TaskRepository
from app.schemas.task import TaskCreate, TaskUpdate
from app.services.group import GroupNotFoundError


class TaskNotFoundError(Exception):
    pass


class TaskCompletedError(Exception):
    pass


class InvalidAssigneeError(Exception):
    pass


class TaskService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.tasks = TaskRepository(db)
        self.groups = GroupRepository(db)

    async def _check_assignee(
        self, creator_id: UUID, group_id: UUID | None, assignee_id: UUID | None
    ) -> None:
        if assignee_id is None:
            return
        if group_id is None:
            if assignee_id != creator_id:
                raise InvalidAssigneeError("A personal task can only be assigned to its owner")
            return
        member = await self.groups.member(group_id, assignee_id)
        if member is None:
            raise InvalidAssigneeError("The assignee must be a group member")

    async def create(self, user_id: UUID, body: TaskCreate) -> Task:
        if body.group_id is not None:
            group = await self.groups.by_member(body.group_id, user_id, for_update=True)
            if group is None:
                raise GroupNotFoundError("Group not found")
        await self._check_assignee(user_id, body.group_id, body.assignee_id)
        task = Task(
            id=uuid4(),
            creator_id=user_id,
            status=TaskStatus.OPEN,
            created_at=utc_now(),
            **body.model_dump(),
        )
        self.tasks.add(task)
        await self.db.commit()
        return task

    async def list(
        self,
        user_id: UUID,
        *,
        group_id: UUID | None = None,
        status: TaskStatus | None = None,
        assignee_id: UUID | None = None,
    ) -> list[Task]:
        if group_id is not None:
            group = await self.groups.by_member(group_id, user_id)
            if group is None:
                raise GroupNotFoundError("Group not found")
        return await self.tasks.for_user(
            user_id, group_id=group_id, status=status, assignee_id=assignee_id
        )

    async def get(self, user_id: UUID, task_id: UUID, *, for_update: bool = False) -> Task:
        task = await self.tasks.by_id(task_id)
        if task is None:
            raise TaskNotFoundError("Task not found")
        if task.group_id is None:
            if task.creator_id != user_id:
                raise TaskNotFoundError("Task not found")
        else:
            # Group writes lock the group first, including member removal and deletion.
            group = await self.groups.by_member(task.group_id, user_id, for_update=for_update)
            if group is None:
                raise TaskNotFoundError("Task not found")
        if for_update:
            task = await self.tasks.by_id(task_id, for_update=True)
            if task is None:
                raise TaskNotFoundError("Task not found")
        return task

    async def update(self, user_id: UUID, task_id: UUID, body: TaskUpdate) -> Task:
        task = await self.get(user_id, task_id, for_update=True)
        if task.status == TaskStatus.COMPLETED:
            raise TaskCompletedError("Completed tasks are read-only")
        changes = body.model_dump(exclude_unset=True)
        if "assignee_id" in changes:
            await self._check_assignee(task.creator_id, task.group_id, body.assignee_id)
        for field, value in changes.items():
            setattr(task, field, value)
        await self.db.commit()
        return task

    async def delete(self, user_id: UUID, task_id: UUID) -> None:
        task = await self.get(user_id, task_id, for_update=True)
        if task.status == TaskStatus.COMPLETED:
            raise TaskCompletedError("Completed tasks are read-only")
        await self.tasks.delete(task_id)
        await self.db.commit()
