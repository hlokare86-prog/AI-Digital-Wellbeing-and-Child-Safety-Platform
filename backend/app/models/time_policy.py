from sqlalchemy import (
    Column,
    Integer,
    Boolean,
    Time,
    ForeignKey,
    Enum
)

from sqlalchemy.orm import relationship

from app.database.database import Base
from app.models.category_enum import WebsiteCategory


class TimePolicy(Base):
    __tablename__ = "time_policies"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    child_id = Column(
        Integer,
        ForeignKey("children.id"),
        nullable=False
    )

    category = Column(
        Enum(WebsiteCategory),
        nullable=False
    )

    start_time = Column(
        Time,
        nullable=False
    )

    end_time = Column(
        Time,
        nullable=False
    )

    enabled = Column(
        Boolean,
        default=True
    )

    child = relationship(
        "Child",
        back_populates="time_policies"
    )