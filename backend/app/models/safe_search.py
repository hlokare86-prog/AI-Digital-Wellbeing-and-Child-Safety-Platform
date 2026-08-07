from sqlalchemy import Boolean, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.database import Base


class SafeSearch(Base):
    __tablename__ = "safe_search"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True
    )

    child_id: Mapped[int] = mapped_column(
        ForeignKey("children.id"),
        nullable=False,
        unique=True,
        index=True
    )

    google_enabled = mapped_column(
    Boolean,
    default=True,
    nullable=False
)

    youtube_restricted: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
        nullable=False
    )

    bing_safe_search: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
        nullable=False
    )

    child = relationship(
        "Child",
        back_populates="safe_search"
    )