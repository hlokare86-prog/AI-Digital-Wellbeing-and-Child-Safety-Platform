from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.activity_log import ActivityLog
from app.models.screen_time import ScreenTime

from app.services.risk_score_service import calculate_risk_score
from app.utils.child_validator import get_child_or_404

def generate_ai_insights(
    db: Session,
    child_id: int
):
    get_child_or_404(
        db,
        child_id
    )
    risk = calculate_risk_score(
        db,
        child_id
    )

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

    used = 0

    if screen:
        used = screen.used_minutes

    insights = []

    insights.append(
        f"Allowed websites visited: {allowed}"
    )

    insights.append(
        f"Blocked website attempts: {blocked}"
    )

    insights.append(
        f"Today's screen time: {used} minutes"
    )

    if blocked >= 5:
        insights.append(
            "Frequent blocked website attempts detected."
        )

    if used >= 120:
        insights.append(
            "Screen time exceeded two hours."
        )

    return {
        "child_id": child_id,
        "safety_score": risk["safety_score"],
        "risk_level": risk["risk_level"],
        "summary": risk["summary"],
        "recommendations": risk["recommendations"],
        "insights": insights
    }