from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class GroupCreate(BaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str = Field(min_length=1, pattern=r"\S")


class GroupRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: UUID
    name: str
    owner_id: UUID
    created_at: datetime


class InvitationRead(BaseModel):
    group_id: UUID
    token: str
    created_at: datetime


class InvitationPreview(BaseModel):
    group_id: UUID
    name: str
