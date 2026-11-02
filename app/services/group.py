from uuid import UUID, uuid4

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import new_token, token_hash, utc_now, valid_token
from app.models.group import Group, GroupInvitation, GroupMember
from app.models.user import User
from app.repository.group import GroupRepository
from app.repository.invitation import InvitationRepository
from app.repository.task import TaskRepository
from app.repository.user import UserRepository
from app.schemas.group import InvitationPreview, InvitationRead


class GroupNotFoundError(Exception):
    pass


class GroupOwnerRequiredError(Exception):
    pass


class OwnerCannotLeaveError(Exception):
    pass


class MemberNotFoundError(Exception):
    pass


class InvitationNotFoundError(Exception):
    pass


class GroupService:
    def __init__(self, db: AsyncSession):
        self.db = db
        self.groups = GroupRepository(db)
        self.invitations = InvitationRepository(db)
        self.tasks = TaskRepository(db)
        self.users = UserRepository(db)

    async def create(self, user_id: UUID, name: str) -> Group:
        group = Group(id=uuid4(), name=name, owner_id=user_id, created_at=utc_now())
        self.groups.add(group)
        # Persist the group before its membership, using the same transaction.
        await self.db.flush()
        self.groups.add_member(GroupMember(group_id=group.id, user_id=user_id))
        await self.db.commit()
        return group

    async def list(self, user_id: UUID) -> list[Group]:
        return await self.groups.for_user(user_id)

    async def get(self, user_id: UUID, group_id: UUID) -> Group:
        group = await self.groups.by_member(group_id, user_id)
        if group is None:
            raise GroupNotFoundError("Group not found")
        return group

    async def members(self, user_id: UUID, group_id: UUID) -> list[User]:
        await self.get(user_id, group_id)
        members = await self.groups.members(group_id)
        return await self.users.by_ids([member.user_id for member in members])

    async def _owned_group(self, user_id: UUID, group_id: UUID) -> Group:
        group = await self.groups.by_member(group_id, user_id, for_update=True)
        if group is None:
            raise GroupNotFoundError("Group not found")
        if group.owner_id != user_id:
            raise GroupOwnerRequiredError("Group owner required")
        return group

    async def delete(self, user_id: UUID, group_id: UUID) -> None:
        await self._owned_group(user_id, group_id)
        await self.groups.delete(group_id)
        await self.db.commit()

    async def leave(self, user_id: UUID, group_id: UUID) -> None:
        group = await self.groups.by_member(group_id, user_id, for_update=True)
        if group is None:
            raise GroupNotFoundError("Group not found")
        if group.owner_id == user_id:
            raise OwnerCannotLeaveError("The owner cannot leave the group")
        await self.tasks.unassign_unfinished(group_id, user_id)
        await self.groups.remove_member(group_id, user_id)
        await self.db.commit()

    async def remove_member(self, user_id: UUID, group_id: UUID, member_id: UUID) -> None:
        group = await self._owned_group(user_id, group_id)
        if member_id == group.owner_id:
            raise OwnerCannotLeaveError("The owner cannot leave the group")
        member = await self.groups.member(group_id, member_id)
        if member is None:
            raise MemberNotFoundError("Member not found")
        await self.tasks.unassign_unfinished(group_id, member_id)
        await self.groups.remove_member(group_id, member_id)
        await self.db.commit()

    async def create_invitation(self, user_id: UUID, group_id: UUID) -> InvitationRead:
        await self._owned_group(user_id, group_id)
        token = new_token()
        now = utc_now()
        invitation = await self.invitations.by_group(group_id)
        if invitation is None:
            invitation = GroupInvitation(
                group_id=group_id, token_hash=token_hash(token), created_at=now
            )
            self.invitations.add(invitation)
        else:
            invitation.token_hash = token_hash(token)
            invitation.created_at = now
        await self.db.commit()
        return InvitationRead(group_id=group_id, token=token, created_at=now)

    async def revoke_invitation(self, user_id: UUID, group_id: UUID) -> None:
        await self._owned_group(user_id, group_id)
        await self.invitations.delete(group_id)
        await self.db.commit()

    async def _invitation(self, token: str) -> GroupInvitation:
        if not valid_token(token):
            raise InvitationNotFoundError("Invitation not found")
        invitation = await self.invitations.by_hash(token_hash(token))
        if invitation is None:
            raise InvitationNotFoundError("Invitation not found")
        return invitation

    async def preview_invitation(self, token: str) -> InvitationPreview:
        invitation = await self._invitation(token)
        group = await self.groups.by_id(invitation.group_id)
        if group is None:
            raise InvitationNotFoundError("Invitation not found")
        return InvitationPreview(group_id=group.id, name=group.name)

    async def accept_invitation(self, user_id: UUID, token: str) -> Group:
        invitation = await self._invitation(token)
        group = await self.groups.by_id(invitation.group_id, for_update=True)
        if group is None:
            raise InvitationNotFoundError("Invitation not found")
        # Recheck after locking: revocation may have committed while we waited.
        await self._invitation(token)
        member = await self.groups.member(group.id, user_id)
        if member is None:
            self.groups.add_member(GroupMember(group_id=group.id, user_id=user_id))
        await self.db.commit()
        return group
