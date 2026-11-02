from datetime import datetime
from enum import StrEnum
from uuid import UUID, uuid4

from sqlalchemy import DateTime, Enum, ForeignKey, Index, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class TaskStatus(StrEnum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


class TaskPriority(StrEnum):
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"


class Task(Base):
    __tablename__ = "tasks"
    __table_args__ = (
        Index("ix_tasks_creator_id", "creator_id"),
        Index("ix_tasks_group_id", "group_id"),
    )

    id: Mapped[UUID] = mapped_column(primary_key=True, default=uuid4)
    title: Mapped[str] = mapped_column(Text)
    description: Mapped[str | None] = mapped_column(Text)
    priority: Mapped[TaskPriority] = mapped_column(
        Enum(
            TaskPriority,
            name="task_priority",
            native_enum=False,
            create_constraint=True,
            values_callable=lambda values: [value.value for value in values],
        ),
        default=TaskPriority.NORMAL,
    )
    status: Mapped[TaskStatus] = mapped_column(
        Enum(
            TaskStatus,
            name="task_status",
            native_enum=False,
            create_constraint=True,
            values_callable=lambda values: [value.value for value in values],
        ),
        default=TaskStatus.OPEN,
    )
    creator_id: Mapped[UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"))
    group_id: Mapped[UUID | None] = mapped_column(ForeignKey("groups.id", ondelete="CASCADE"))
    assignee_id: Mapped[UUID | None] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
