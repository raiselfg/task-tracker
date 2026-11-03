from uuid import UUID

from fastapi import APIRouter, HTTPException

from app.api.dependencies import ChecklistServiceDep, CurrentSessionDep
from app.schemas.checklist import (
    ChecklistCreate,
    ChecklistDetail,
    ChecklistItemCreate,
    ChecklistItemRead,
    ChecklistItemUpdate,
    ChecklistRead,
    ChecklistUpdate,
)
from app.services.checklist import ChecklistItemNotFoundError, ChecklistNotFoundError
from app.services.group import GroupNotFoundError

router = APIRouter(prefix="/checklists", tags=["checklists"])


@router.post("", status_code=201, response_model=ChecklistRead)
async def create_checklist(
    body: ChecklistCreate, current_session: CurrentSessionDep, checklists: ChecklistServiceDep
):
    try:
        return await checklists.create(current_session.user.id, body)
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None


@router.get("", response_model=list[ChecklistRead])
async def list_checklists(
    current_session: CurrentSessionDep,
    checklists: ChecklistServiceDep,
    group_id: UUID | None = None,
):
    try:
        return await checklists.list(current_session.user.id, group_id=group_id)
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None


@router.get("/{checklist_id}", response_model=ChecklistDetail)
async def get_checklist(
    checklist_id: UUID, current_session: CurrentSessionDep, checklists: ChecklistServiceDep
):
    try:
        return await checklists.detail(current_session.user.id, checklist_id)
    except ChecklistNotFoundError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from None


@router.patch("/{checklist_id}", response_model=ChecklistRead)
async def update_checklist(
    checklist_id: UUID,
    body: ChecklistUpdate,
    current_session: CurrentSessionDep,
    checklists: ChecklistServiceDep,
):
    try:
        return await checklists.update(current_session.user.id, checklist_id, body)
    except ChecklistNotFoundError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from None


@router.delete("/{checklist_id}", status_code=204)
async def delete_checklist(
    checklist_id: UUID, current_session: CurrentSessionDep, checklists: ChecklistServiceDep
):
    try:
        await checklists.delete(current_session.user.id, checklist_id)
    except ChecklistNotFoundError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from None


@router.post("/{checklist_id}/items", status_code=201, response_model=ChecklistItemRead)
async def add_checklist_item(
    checklist_id: UUID,
    body: ChecklistItemCreate,
    current_session: CurrentSessionDep,
    checklists: ChecklistServiceDep,
):
    try:
        return await checklists.add_item(current_session.user.id, checklist_id, body)
    except ChecklistNotFoundError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from None


@router.patch("/{checklist_id}/items/{item_id}", response_model=ChecklistItemRead)
async def update_checklist_item(
    checklist_id: UUID,
    item_id: UUID,
    body: ChecklistItemUpdate,
    current_session: CurrentSessionDep,
    checklists: ChecklistServiceDep,
):
    try:
        return await checklists.update_item(current_session.user.id, checklist_id, item_id, body)
    except (ChecklistNotFoundError, ChecklistItemNotFoundError) as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from None


@router.delete("/{checklist_id}/items/{item_id}", status_code=204)
async def delete_checklist_item(
    checklist_id: UUID,
    item_id: UUID,
    current_session: CurrentSessionDep,
    checklists: ChecklistServiceDep,
):
    try:
        await checklists.delete_item(current_session.user.id, checklist_id, item_id)
    except (ChecklistNotFoundError, ChecklistItemNotFoundError) as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from None
