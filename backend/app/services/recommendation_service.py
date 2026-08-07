from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.activity_log import ActivityLog
from app.models.screen_time import ScreenTime
from app.utils.child_validator import get_child_or_404

def generate_recommendations(
    db: Session,
    child_id: int
):
    get_child_or_404(
        db,
        child_id
    )
    recommendations = []

    blocked = (
        db.query(func.count(ActivityLog.id))
        .filter(
            ActivityLog.child_id == child_id,
            ActivityLog.decision == "BLOCKED"
        )
        .scalar()
    ) or 0

    allowed = (
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

    used_minutes = 0

    if screen:
        used_minutes = screen.used_minutes

    # Website behaviour
    if blocked >= 10:
        recommendations.append(
            "High number of blocked websites detected. Consider enabling stricter parental controls."
        )

    elif blocked >= 5:
        recommendations.append(
            "Several blocked website attempts detected. Review your child's browsing activity."
        )

    else:
        recommendations.append(
            "Browsing activity is generally safe. Continue regular monitoring."
        )

    # Screen time
    if used_minutes >= 180:
        recommendations.append(
            "Daily screen time is very high. Reduce the daily limit and encourage offline activities."
        )

    elif used_minutes >= 120:
        recommendations.append(
            "Screen time is above the recommended limit. Consider reducing usage."
        )

    elif used_minutes >= 60:
        recommendations.append(
            "Screen time is moderate. Continue monitoring usage."
        )

    else:
        recommendations.append(
            "Screen time is within a healthy range."
        )

    # Overall activity
    if allowed > blocked * 3:
        recommendations.append(
            "Most browsing activity is safe. Current protection settings are effective."
        )

    return {
        "child_id": child_id,
        "recommendations": recommendations
    }