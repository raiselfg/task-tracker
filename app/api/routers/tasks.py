from uuid import UUID

from fastapi import APIRouter, HTTPException

from app.api.dependencies import CurrentSessionDep, TaskServiceDep
from app.models.task import TaskStatus
from app.schemas.task import TaskCreate, TaskRead, TaskUpdate
from app.services.group import GroupNotFoundError
from app.services.task import InvalidAssigneeError, TaskCompletedError, TaskNotFoundError

router = APIRouter(prefix="/tasks", tags=["tasks"])


@router.post("", status_code=201, response_model=TaskRead)
async def create_task(body: TaskCreate, current_session: CurrentSessionDep, tasks: TaskServiceDep):
    try:
        return await tasks.create(current_session.user.id, body)
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None
    except InvalidAssigneeError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from None


@router.get("", response_model=list[TaskRead])
async def list_tasks(
    current_session: CurrentSessionDep,
    tasks: TaskServiceDep,
    group_id: UUID | None = None,
    status: TaskStatus | None = None,
    assignee_id: UUID | None = None,
):
    try:
        return await tasks.list(
            current_session.user.id, group_id=group_id, status=status, assignee_id=assignee_id
        )
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None


@router.get("/{task_id}", response_model=TaskRead)
async def get_task(task_id: UUID, current_session: CurrentSessionDep, tasks: TaskServiceDep):
    try:
        return await tasks.get(current_session.user.id, task_id)
    except TaskNotFoundError:
        raise HTTPException(status_code=404, detail="Task not found") from None


@router.patch("/{task_id}", response_model=TaskRead)
async def update_task(
    task_id: UUID, body: TaskUpdate, current_session: CurrentSessionDep, tasks: TaskServiceDep
):
    try:
        return await tasks.update(current_session.user.id, task_id, body)
    except TaskNotFoundError:
        raise HTTPException(status_code=404, detail="Task not found") from None
    except TaskCompletedError:
        raise HTTPException(status_code=409, detail="Completed tasks are read-only") from None
    except InvalidAssigneeError as exc:
        raise HTTPException(status_code=422, detail=str(exc)) from None


@router.delete("/{task_id}", status_code=204)
async def delete_task(task_id: UUID, current_session: CurrentSessionDep, tasks: TaskServiceDep):
    try:
        await tasks.delete(current_session.user.id, task_id)
    except TaskNotFoundError:
        raise HTTPException(status_code=404, detail="Task not found") from None
    except TaskCompletedError:
        raise HTTPException(status_code=409, detail="Completed tasks are read-only") from None
