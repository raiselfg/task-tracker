from uuid import UUID

from fastapi import APIRouter, HTTPException

from app.api.dependencies import CurrentSessionDep, GroupServiceDep
from app.schemas.group import GroupCreate, GroupRead, InvitationRead
from app.schemas.user import UserRead
from app.services.group import (
    GroupNotFoundError,
    GroupOwnerRequiredError,
    MemberNotFoundError,
    OwnerCannotLeaveError,
)

router = APIRouter(prefix="/groups", tags=["groups"])


@router.post("", status_code=201, response_model=GroupRead)
async def create_group(
    body: GroupCreate, current_session: CurrentSessionDep, groups: GroupServiceDep
):
    return await groups.create(current_session.user.id, body.name)


@router.get("", response_model=list[GroupRead])
async def list_groups(current_session: CurrentSessionDep, groups: GroupServiceDep):
    return await groups.list(current_session.user.id)


@router.get("/{group_id}", response_model=GroupRead)
async def get_group(group_id: UUID, current_session: CurrentSessionDep, groups: GroupServiceDep):
    try:
        return await groups.get(current_session.user.id, group_id)
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None


@router.delete("/{group_id}", status_code=204)
async def delete_group(group_id: UUID, current_session: CurrentSessionDep, groups: GroupServiceDep):
    try:
        await groups.delete(current_session.user.id, group_id)
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None
    except GroupOwnerRequiredError:
        raise HTTPException(status_code=403, detail="Group owner required") from None


@router.get("/{group_id}/members", response_model=list[UserRead])
async def list_members(group_id: UUID, current_session: CurrentSessionDep, groups: GroupServiceDep):
    try:
        return await groups.members(current_session.user.id, group_id)
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None


@router.delete("/{group_id}/members/{member_id}", status_code=204)
async def remove_member(
    group_id: UUID, member_id: UUID, current_session: CurrentSessionDep, groups: GroupServiceDep
):
    try:
        await groups.remove_member(current_session.user.id, group_id, member_id)
    except (GroupNotFoundError, MemberNotFoundError) as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from None
    except GroupOwnerRequiredError:
        raise HTTPException(status_code=403, detail="Group owner required") from None
    except OwnerCannotLeaveError:
        raise HTTPException(status_code=409, detail="The owner cannot leave the group") from None


@router.post("/{group_id}/leave", status_code=204)
async def leave_group(group_id: UUID, current_session: CurrentSessionDep, groups: GroupServiceDep):
    try:
        await groups.leave(current_session.user.id, group_id)
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None
    except OwnerCannotLeaveError:
        raise HTTPException(status_code=409, detail="The owner cannot leave the group") from None


@router.post("/{group_id}/invitation", status_code=201, response_model=InvitationRead)
async def create_invitation(
    group_id: UUID, current_session: CurrentSessionDep, groups: GroupServiceDep
):
    try:
        return await groups.create_invitation(current_session.user.id, group_id)
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None
    except GroupOwnerRequiredError:
        raise HTTPException(status_code=403, detail="Group owner required") from None


@router.delete("/{group_id}/invitation", status_code=204)
async def revoke_invitation(
    group_id: UUID, current_session: CurrentSessionDep, groups: GroupServiceDep
):
    try:
        await groups.revoke_invitation(current_session.user.id, group_id)
    except GroupNotFoundError:
        raise HTTPException(status_code=404, detail="Group not found") from None
    except GroupOwnerRequiredError:
        raise HTTPException(status_code=403, detail="Group owner required") from None
