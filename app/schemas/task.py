from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, model_validator

from app.models.task import TaskPriority, TaskStatus


class TaskCreate(BaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str = Field(min_length=1, pattern=r"\S")
    description: str | None = None
    priority: TaskPriority = TaskPriority.NORMAL
    group_id: UUID | None = None
    assignee_id: UUID | None = None


class TaskUpdate(BaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str | None = Field(default=None, min_length=1, pattern=r"\S")
    description: str | None = None
    priority: TaskPriority | None = None
    status: TaskStatus | None = None
    assignee_id: UUID | None = None

    @model_validator(mode="after")
    def reject_null_required_fields(self):
        for field in ("title", "priority", "status"):
            if field in self.model_fields_set and getattr(self, field) is None:
                raise ValueError(f"{field} cannot be null")
        return self


class TaskRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    title: str
    description: str | None
    priority: TaskPriority
    status: TaskStatus
    creator_id: UUID
    group_id: UUID | None
    assignee_id: UUID | None
    created_at: datetime
