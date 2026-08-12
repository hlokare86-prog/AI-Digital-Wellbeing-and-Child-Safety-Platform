from sqlalchemy import Column, Integer, String, Boolean, Enum
from app.models.category_enum import WebsiteCategory
from app.database.database import Base


class Website(Base):
    __tablename__ = "websites"

    id = Column(Integer, primary_key=True, index=True)

    domain = Column(
        String(255),
        unique=True,
        nullable=False,
        index=True
    )

    category = Column(
        Enum(WebsiteCategory),
        nullable=False
    )

    is_blocked = Column(
        Boolean,
        default=True
    )