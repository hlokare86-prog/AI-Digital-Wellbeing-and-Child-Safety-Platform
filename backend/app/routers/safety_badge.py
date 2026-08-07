from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.safety_badge import (
    SafetyBadgeResponse
)

from app.services.safety_badge_service import (
    get_safety_badge
)

router = APIRouter(
    prefix="/safety-badge",
    tags=["Safety Badge"]
)


@router.get(
    "/child/{child_id}",
    response_model=SafetyBadgeResponse
)
def child_safety_badge(
    child_id: int,
    db: Session = Depends(get_db)
):
    return get_safety_badge(
        db,
        child_id
    )