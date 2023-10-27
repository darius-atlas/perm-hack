from db.models.base import BaseModel
from sqlalchemy import (
    Column,
    Integer,
    ForeignKey
)

from sqlalchemy.orm import relationship
from db.models.camera import DBCamera


class DBConveer(BaseModel):
    __tablename__ = "conveer"
    wood = Column(Integer)
    metal = Column(Integer)
    glass = Column(Integer)
    plastic = Column(Integer)
    camera_id = Column(Integer, ForeignKey('camera.id'), nullable=False)

    camera = relationship('DBCamera', lazy="raise", uselist=False)


