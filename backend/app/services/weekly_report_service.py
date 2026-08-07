from datetime import date, timedelta

from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.activity_log import ActivityLog
from app.models.screen_time import ScreenTime
from app.utils.child_validator import get_child_or_404

def get_weekly_report(
    db: Session,
    child_id: int
):
    get_child_or_404(
        db,
        child_id
    )
    today = date.today()
    week_start = today - timedelta(days=6)

    total_requests = (
        db.query(ActivityLog)
        .filter(
            ActivityLog.child_id == child_id,
            func.date(ActivityLog.timestamp) >= week_start
        )
        .count()
    )

    allowed_requests = (
        db.query(ActivityLog)
        .filter(
            ActivityLog.child_id == child_id,
            ActivityLog.decision == "ALLOWED",
            func.date(ActivityLog.timestamp) >= week_start
        )
        .count()
    )

    blocked_requests = (
        db.query(ActivityLog)
        .filter(
            ActivityLog.child_id == child_id,
            ActivityLog.decision == "BLOCKED",
            func.date(ActivityLog.timestamp) >= week_start
        )
        .count()
    )

    screen = (
        db.query(ScreenTime)
        .filter(ScreenTime.child_id == child_id)
        .first()
    )

    average_daily_screen_time = 0

    if screen:
        average_daily_screen_time = round(
            screen.used_minutes / 7,
            2
        )

    average_safety_score = max(
        0,
        100 - (blocked_requests * 10)
    )

    return {
        "child_id": child_id,
        "week_start": week_start,
        "week_end": today,
        "total_requests": total_requests,
        "allowed_requests": allowed_requests,
        "blocked_requests": blocked_requests,
        "average_daily_screen_time": average_daily_screen_time,
        "average_safety_score": average_safety_score
    }