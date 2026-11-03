"""Create personal and group checklists with checkable items."""

import sqlalchemy as sa

from alembic import op

revision = "0003"
down_revision = "0002"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "checklists",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("title", sa.Text(), nullable=False),
        sa.Column("creator_id", sa.Uuid(), nullable=False),
        sa.Column("group_id", sa.Uuid(), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["creator_id"], ["users.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["group_id"], ["groups.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_checklists_creator_id", "checklists", ["creator_id"])
    op.create_index("ix_checklists_group_id", "checklists", ["group_id"])
    op.create_table(
        "checklist_items",
        sa.Column("id", sa.Uuid(), nullable=False),
        sa.Column("checklist_id", sa.Uuid(), nullable=False),
        sa.Column("title", sa.Text(), nullable=False),
        sa.Column("checked", sa.Boolean(), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["checklist_id"], ["checklists.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_checklist_items_checklist_id", "checklist_items", ["checklist_id"])


def downgrade():
    op.drop_index("ix_checklist_items_checklist_id", table_name="checklist_items")
    op.drop_table("checklist_items")
    op.drop_index("ix_checklists_group_id", table_name="checklists")
    op.drop_index("ix_checklists_creator_id", table_name="checklists")
    op.drop_table("checklists")
