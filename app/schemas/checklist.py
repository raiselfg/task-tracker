from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field, model_validator


class ChecklistCreate(BaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str = Field(min_length=1, pattern=r"\S")
    group_id: UUID | None = None


class ChecklistUpdate(BaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str = Field(min_length=1, pattern=r"\S")


class ChecklistItemCreate(BaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str = Field(min_length=1, pattern=r"\S")


class ChecklistItemUpdate(BaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str | None = Field(default=None, min_length=1, pattern=r"\S")
    checked: bool | None = None

    @model_validator(mode="after")
    def reject_null_required_fields(self):
        for field in ("title", "checked"):
            if field in self.model_fields_set and getattr(self, field) is None:
                raise ValueError(f"{field} cannot be null")
        return self


class ChecklistRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    title: str
    creator_id: UUID
    group_id: UUID | None
    created_at: datetime


class ChecklistItemRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    checklist_id: UUID
    title: str
    checked: bool
    created_at: datetime


class ChecklistDetail(ChecklistRead):
    items: list[ChecklistItemRead]
