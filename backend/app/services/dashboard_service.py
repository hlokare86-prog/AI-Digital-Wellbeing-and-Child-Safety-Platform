from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.activity_log import ActivityLog
from app.models.screen_time import ScreenTime

from app.utils.child_validator import get_child_or_404


def get_dashboard_summary(
    db: Session,
    child_id: int
):
    get_child_or_404(
        db,
        child_id
    )

    # Total website requests
    total_requests = (
        db.query(func.count(ActivityLog.id))
        .filter(ActivityLog.child_id == child_id)
        .scalar()
    ) or 0

    # Blocked requests
    blocked_requests = (
        db.query(func.count(ActivityLog.id))
        .filter(
            ActivityLog.child_id == child_id,
            ActivityLog.decision == "BLOCKED"
        )
        .scalar()
    ) or 0

    # Allowed requests
    allowed_requests = (
        db.query(func.count(ActivityLog.id))
        .filter(
            ActivityLog.child_id == child_id,
            ActivityLog.decision == "ALLOWED"
        )
        .scalar()
    ) or 0

    screen = (
        db.query(ScreenTime)
        .filter(ScreenTime.child_id == child_id)
        .first()
    )

    screen_time_used = 0

    if screen:
        screen_time_used = screen.used_minutes

    if total_requests == 0:
        safety_score = 100
    else:
        safety_score = int(
            (allowed_requests / total_requests) * 100
        )

    return {
        "total_requests": total_requests,
        "blocked_requests": blocked_requests,
        "allowed_requests": allowed_requests,
        "screen_time_used": screen_time_used,
        "safety_score": safety_score
    }