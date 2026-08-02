from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    ForeignKey
)

from sqlalchemy.orm import relationship

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
        String(100),
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