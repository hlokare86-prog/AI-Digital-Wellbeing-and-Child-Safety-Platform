from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db

from app.schemas.parent_dashboard import (
    ParentDashboardResponse
)

from app.services.parent_dashboard_service import (
    get_parent_dashboard
)

router = APIRouter(
    prefix="/parent-dashboard",
    tags=["Parent Dashboard"]
)


@router.get(
    "/child/{child_id}",
    response_model=ParentDashboardResponse
)
def parent_dashboard(
    child_id: int,
    db: Session = Depends(get_db)
):
    return get_parent_dashboard(
        db,
        child_id
    )