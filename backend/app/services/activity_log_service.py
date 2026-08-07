from sqlalchemy.orm import Session

from app.models.activity_log import ActivityLog
from app.utils.child_validator import get_child_or_404
from sqlalchemy.exc import SQLAlchemyError

def log_activity(
    db: Session,
    child_id: int,
    domain: str,
    category: str,
    decision: str,
    reason: str,
    source: str,
    confidence: int = 100
):
    # Validate child exists
    get_child_or_404(
        db,
        child_id
    )

    log = ActivityLog(
        child_id=child_id,
        domain=domain,
        category=category,
        decision=decision,
        reason=reason,
        source=source,
        confidence=confidence
    )

    db.add(log)
    try:
        db.commit()
    except SQLAlchemyError as e:
        db.rollback()
        raise e     
    db.refresh(log)

    return log


def get_child_logs(
    db: Session,
    child_id: int
):
    # Validate child exists
    get_child_or_404(
        db,
        child_id
    )

    return (
        db.query(ActivityLog)
        .filter(ActivityLog.child_id == child_id)
        .order_by(ActivityLog.timestamp.desc())
        .all()
    )


def get_all_logs(
    db: Session
):
    return (
        db.query(ActivityLog)
        .order_by(ActivityLog.timestamp.desc())
        .all()
    )


def get_log(
    db: Session,
    log_id: int
):
    return (
        db.query(ActivityLog)
        .filter(ActivityLog.id == log_id)
        .first()
    )

