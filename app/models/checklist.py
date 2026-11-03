from datetime import datetime
from uuid import UUID, uuid4

from sqlalchemy import DateTime, ForeignKey, Index, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Checklist(Base):
    __tablename__ = "checklists"
    __table_args__ = (
        Index("ix_checklists_creator_id", "creator_id"),
        Index("ix_checklists_group_id", "group_id"),
    )

    id: Mapped[UUID] = mapped_column(primary_key=True, default=uuid4)
    title: Mapped[str] = mapped_column(Text)
    creator_id: Mapped[UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"))
    group_id: Mapped[UUID | None] = mapped_column(ForeignKey("groups.id", ondelete="CASCADE"))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))


class ChecklistItem(Base):
    __tablename__ = "checklist_items"
    __table_args__ = (Index("ix_checklist_items_checklist_id", "checklist_id"),)

    id: Mapped[UUID] = mapped_column(primary_key=True, default=uuid4)
    checklist_id: Mapped[UUID] = mapped_column(ForeignKey("checklists.id", ondelete="CASCADE"))
    title: Mapped[str] = mapped_column(Text)
    checked: Mapped[bool] = mapped_column(default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
