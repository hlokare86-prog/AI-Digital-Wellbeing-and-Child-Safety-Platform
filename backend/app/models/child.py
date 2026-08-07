from sqlalchemy import (
    Column,
    ForeignKey,
    Integer,
    String,
)
from sqlalchemy.orm import relationship

from app.database.database import Base


class Child(Base):
    __tablename__ = "children"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(100),
        nullable=False
    )

    age = Column(
        Integer,
        nullable=False
    )

    device_name = Column(
        String(100),
        nullable=True
    )

    parent_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    # Parent Relationship
    parent = relationship(
        "User",
        back_populates="children"
    )

    # DNS Policies
    policies = relationship(
        "ChildPolicy",
        back_populates="child",
        cascade="all, delete-orphan"
    )

    # Activity Logs
    activity_logs = relationship(
        "ActivityLog",
        back_populates="child",
        cascade="all, delete-orphan"
    )

    # Time Policies
    time_policies = relationship(
        "TimePolicy",
        back_populates="child",
        cascade="all, delete-orphan"
    )

    # Screen Time
    screen_time = relationship(
        "ScreenTime",
        back_populates="child"
    )

    # Notifications
    notifications = relationship(
        "Notification",
        back_populates="child",
        cascade="all, delete-orphan"
    )

    # Safe Search
    safe_search = relationship(
        "SafeSearch",
        back_populates="child",
        uselist=False,
        cascade="all, delete-orphan"
    )