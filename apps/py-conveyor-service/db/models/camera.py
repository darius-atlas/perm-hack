from db.models.base import BaseModel
from sqlalchemy import (
    Column,
    Integer,
    String
)


class DBCamera(BaseModel):
    __tablename__ = "camera"
    camera_type = Column(String, nullable=False)
    order_numb = Column(Integer, unique=True)
