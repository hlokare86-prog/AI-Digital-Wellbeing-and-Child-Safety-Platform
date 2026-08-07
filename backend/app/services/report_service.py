from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.activity_log import ActivityLog
from app.models.screen_time import ScreenTime

from app.utils.child_validator import get_child_or_404


def get_daily_report(
    db: Session,
    child_id: int
):
    get_child_or_404(
        db,
        child_id
    )

    total_requests = (
        db.query(func.count(ActivityLog.id))
        .filter(ActivityLog.child_id == child_id)
        .scalar()
    )

    blocked_requests = (
        db.query(func.count(ActivityLog.id))
        .filter(
            ActivityLog.child_id == child_id,
            ActivityLog.decision == "BLOCKED"
        )
        .scalar()
    )

    allowed_requests = (
        db.query(func.count(ActivityLog.id))
        .filter(
            ActivityLog.child_id == child_id,
            ActivityLog.decision == "ALLOWED"
        )
        .scalar()
    )

    screen = (
        db.query(ScreenTime)
        .filter(ScreenTime.child_id == child_id)
        .first()
    )

    screen_time_used = (
        screen.used_minutes
        if screen
        else 0
    )

    safety_score = max(
        0,
        100 - (blocked_requests * 10)
    )

    return {
        "child_id": child_id,
        "total_requests": total_requests,
        "allowed_requests": allowed_requests,
        "blocked_requests": blocked_requests,
        "screen_time_used": screen_time_used,
        "safety_score": safety_score
    }