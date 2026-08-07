from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime,
    ForeignKey
)
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.database.database import Base


class ActivityLog(Base):
    __tablename__ = "activity_logs"

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

    domain = Column(
        String(255),
        nullable=False
    )

    category = Column(
        String(100),
        nullable=False
    )

    decision = Column(
        String(20),
        nullable=False
    )

    reason = Column(
        String(255),
        nullable=False
    )

    source = Column(
        String(50),
        nullable=False
    )

    confidence = Column(
        Integer,
        nullable=False,
        default=100
    )

    timestamp = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    child = relationship(
        "Child",
        back_populates="activity_logs"
    )
    child_id = Column(
    Integer,
    ForeignKey("children.id"),
    nullable=False,
    index=True
)

timestamp = Column(
    DateTime(timezone=True),
    server_default=func.now(),
    index=True
)