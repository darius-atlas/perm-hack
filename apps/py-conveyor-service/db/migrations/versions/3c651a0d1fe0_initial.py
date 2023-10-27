"""initial

Revision ID: 3c651a0d1fe0
Revises:
Create Date: 2023-10-27 18:19:47.402501

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3c651a0d1fe0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('camera',
    sa.Column('camera_type', sa.String(), nullable=False),
    sa.Column('order_numb', sa.Integer(), nullable=True),
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.Column('updated_at', sa.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_camera')),
    sa.UniqueConstraint('id', name=op.f('uq_camera_id')),
    sa.UniqueConstraint('order_numb', name=op.f('uq_camera_order_numb'))
    )
    op.create_table('conveer',
    sa.Column('wood', sa.Integer(), nullable=True),
    sa.Column('metal', sa.Integer(), nullable=True),
    sa.Column('glass', sa.Integer(), nullable=True),
    sa.Column('plastic', sa.Integer(), nullable=True),
    sa.Column('camera_id', sa.Integer(), nullable=False),
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.Column('updated_at', sa.TIMESTAMP(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.ForeignKeyConstraint(['camera_id'], ['camera.id'], name=op.f('fk_conveer_camera_id_camera')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_conveer')),
    sa.UniqueConstraint('id', name=op.f('uq_conveer_id'))
    )
    op.execute('''INSERT INTO camera(id,order_numb, camera_type) VALUES (1,1, 'По умолчанию')''')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('conveer')
    op.drop_table('camera')
    # ### end Alembic commands ###
