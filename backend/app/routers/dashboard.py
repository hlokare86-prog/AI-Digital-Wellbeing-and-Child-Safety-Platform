from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.dashboard import DashboardResponse
from app.services.dashboard_service import get_dashboard_summary

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get(
    "/child/{child_id}",
    response_model=DashboardResponse
)
def get_dashboard(
    child_id: int,
    db: Session = Depends(get_db)
):
    return get_dashboard_summary(
        db,
        child_id
    )