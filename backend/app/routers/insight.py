from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.insight import AIInsight
from app.services.insight_service import generate_ai_insights

router = APIRouter(
    prefix="/insights",
    tags=["AI Insights"]
)


@router.get(
    "/child/{child_id}",
    response_model=AIInsight
)
def get_child_insights(
    child_id: int,
    db: Session = Depends(get_db)
):
    return generate_ai_insights(
        db,
        child_id
    )