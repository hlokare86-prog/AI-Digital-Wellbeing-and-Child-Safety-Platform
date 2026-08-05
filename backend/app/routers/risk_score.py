from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.risk_score import RiskScoreResponse
from app.services.risk_score_service import calculate_risk_score

router = APIRouter(
    prefix="/risk-score",
    tags=["AI Risk Score"]
)


@router.get(
    "/child/{child_id}",
    response_model=RiskScoreResponse
)
def get_risk_score(
    child_id: int,
    db: Session = Depends(get_db)
):
    return calculate_risk_score(
        db,
        child_id
    )