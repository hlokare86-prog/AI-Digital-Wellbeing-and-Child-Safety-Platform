"""create activity logs table

Revision ID: 56a954a088cb
Revises: 49df585e2ab3
Create Date: 2026-08-04 16:38:57.935552

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '56a954a088cb'
down_revision: Union[str, Sequence[str], None] = '49df585e2ab3'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        'activity_logs',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('child_id', sa.Integer(), nullable=False),
        sa.Column('domain', sa.String(length=255), nullable=False),
        sa.Column('category', sa.String(length=100), nullable=False),
        sa.Column('decision', sa.String(length=20), nullable=False),
        sa.Column('reason', sa.String(length=255), nullable=False),
        sa.Column('source', sa.String(length=50), nullable=False),
        sa.Column('confidence', sa.Integer(), nullable=False),
        sa.Column(
            'timestamp',
            sa.DateTime(timezone=True),
            server_default=sa.text('now()'),
            nullable=True
        ),
        sa.ForeignKeyConstraint(['child_id'], ['children.id']),
        sa.PrimaryKeyConstraint('id')
    )

    op.create_index(
        op.f('ix_activity_logs_id'),
        'activity_logs',
        ['id'],
        unique=False
    )


def downgrade() -> None:
    op.drop_index(
        op.f('ix_activity_logs_id'),
        table_name='activity_logs'
    )

    op.drop_table('activity_logs')