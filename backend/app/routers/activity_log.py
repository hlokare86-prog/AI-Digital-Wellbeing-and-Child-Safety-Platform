from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.activity_log import ActivityLogResponse
from app.services.activity_log_service import (
    get_all_logs,
    get_child_logs,
    get_log,
)

router = APIRouter(
    prefix="/activity",
    tags=["Activity Logs"]
)


@router.get("", response_model=List[ActivityLogResponse])
def list_all_logs(
    db: Session = Depends(get_db)
):
    return get_all_logs(db)


@router.get("/child/{child_id}", response_model=List[ActivityLogResponse])
def list_child_logs(
    child_id: int,
    db: Session = Depends(get_db)
):
    return get_child_logs(db, child_id)


@router.get("/{log_id}", response_model=ActivityLogResponse)
def get_single_log(
    log_id: int,
    db: Session = Depends(get_db)
):
    log = get_log(db, log_id)

    if log is None:
        raise HTTPException(
            status_code=404,
            detail="Activity log not found"
        )

    return log