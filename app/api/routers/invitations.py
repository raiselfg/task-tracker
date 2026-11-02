from fastapi import APIRouter, HTTPException

from app.api.dependencies import CurrentSessionDep, GroupServiceDep
from app.schemas.group import GroupRead, InvitationPreview
from app.services.group import InvitationNotFoundError

router = APIRouter(prefix="/invitations", tags=["invitations"])


@router.get("/{token}", response_model=InvitationPreview)
async def preview_invitation(
    token: str, current_session: CurrentSessionDep, groups: GroupServiceDep
):
    try:
        return await groups.preview_invitation(token)
    except InvitationNotFoundError:
        raise HTTPException(status_code=404, detail="Invitation not found") from None


@router.post("/{token}/accept", response_model=GroupRead)
async def accept_invitation(
    token: str, current_session: CurrentSessionDep, groups: GroupServiceDep
):
    try:
        return await groups.accept_invitation(current_session.user.id, token)
    except InvitationNotFoundError:
        raise HTTPException(status_code=404, detail="Invitation not found") from None
