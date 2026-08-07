from sqlalchemy.orm import Session

from app.services.risk_score_service import (
    calculate_risk_score
)

from app.utils.child_validator import (
    get_child_or_404
)


def get_safety_badge(
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

    score = risk["safety_score"]

    if score >= 90:
        badge = "EXCELLENT"
        color = "Green"

    elif score >= 80:
        badge = "SAFE"
        color = "Green"

    elif score >= 60:
        badge = "MODERATE"
        color = "Yellow"

    elif score >= 40:
        badge = "WARNING"
        color = "Orange"

    else:
        badge = "HIGH RISK"
        color = "Red"

    return {
        "child_id": child_id,
        "safety_score": score,
        "badge": badge,
        "color": color
    }