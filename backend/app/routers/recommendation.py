from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.recommendation import (
    RecommendationResponse
)

from app.services.recommendation_service import (
    generate_recommendations
)

router = APIRouter(
    prefix="/recommendations",
    tags=["AI Recommendations"]
)


@router.get(
    "/child/{child_id}",
    response_model=RecommendationResponse
)
def get_recommendations(
    child_id: int,
    db: Session = Depends(get_db)
):
    return generate_recommendations(
        db,
        child_id
    )