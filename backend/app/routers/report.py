from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.report import DailyReport
from app.schemas.weekly_report import WeeklyReport

from app.services.report_service import get_daily_report
from app.services.weekly_report_service import get_weekly_report

router = APIRouter(
    prefix="/report",
    tags=["Reports"]
)


@router.get(
    "/daily/{child_id}",
    response_model=DailyReport
)
def daily_report(
    child_id: int,
    db: Session = Depends(get_db)
):
    return get_daily_report(
        db,
        child_id
    )


@router.get(
    "/weekly/{child_id}",
    response_model=WeeklyReport
)
def weekly_report(
    child_id: int,
    db: Session = Depends(get_db)
):
    return get_weekly_report(
        db,
        child_id
    )