from sqlalchemy.orm import Session
from sqlalchemy import func

from app.models.activity_log import ActivityLog
from app.models.screen_time import ScreenTime


def calculate_risk_score(
    db: Session,
    child_id: int
):
    total = (
        db.query(func.count(ActivityLog.id))
        .filter(ActivityLog.child_id == child_id)
        .scalar()
    ) or 0

    blocked = (
        db.query(func.count(ActivityLog.id))
        .filter(
            ActivityLog.child_id == child_id,
            ActivityLog.decision == "BLOCKED"
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

    score = 100

    # Penalty for blocked websites
    score -= blocked * 10

    # Penalty for excessive screen time
    if used_minutes > 120:
        score -= 20
    elif used_minutes > 60:
        score -= 10

    if score < 0:
        score = 0

    if score >= 80:
        level = "LOW"
        summary = "Child is browsing safely."
        recommendations = [
            "Continue monitoring activity.",
            "Keep parental policies enabled."
        ]

    elif score >= 50:
        level = "MEDIUM"
        summary = "Moderate online risk detected."
        recommendations = [
            "Review blocked websites.",
            "Reduce unnecessary browsing."
        ]

    else:
        level = "HIGH"
        summary = "High online risk detected."
        recommendations = [
            "Review browsing history immediately.",
            "Reduce screen time.",
            "Enable stricter content filtering."
        ]

    return {
        "child_id": child_id,
        "safety_score": score,
        "risk_level": level,
        "summary": summary,
        "recommendations": recommendations
    }