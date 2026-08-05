from datetime import datetime

from sqlalchemy import Boolean, DateTime, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.database import Base


class ScreenTime(Base):
    __tablename__ = "screen_time"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    child_id: Mapped[int] = mapped_column(
        ForeignKey("children.id"),
        nullable=False
    )

    daily_limit_minutes: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )

    used_minutes: Mapped[int] = mapped_column(
        Integer,
        default=0
    )

    enabled: Mapped[bool] = mapped_column(
        Boolean,
        default=True
    )

    last_reset: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow
    )

    child = relationship(
        "Child",
        back_populates="screen_time"
    )