from sqlalchemy import (
    Column,
    Integer,
    Boolean,
    ForeignKey,
    Enum
)
from sqlalchemy.orm import relationship
from app.models.category_enum import WebsiteCategory
from app.database.database import Base


class ChildPolicy(Base):
    __tablename__ = "child_policies"

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

    is_allowed = Column(
        Boolean,
        default=True
    )

    child = relationship(
        "Child",
        back_populates="policies"
    )