from sqlalchemy.orm import Session

from app.services.dashboard_service import (
    get_dashboard_summary
)

from app.services.risk_score_service import (
    calculate_risk_score
)

from app.services.safety_badge_service import (
    get_safety_badge
)

from app.services.recommendation_service import (
    generate_recommendations
)

from app.services.insight_service import (
    generate_ai_insights
)

from app.services.safe_search_service import (
    get_safe_search
)

from app.utils.child_validator import (
    get_child_or_404
)


def get_parent_dashboard(
    db: Session,
    child_id: int
):
    get_child_or_404(
        db,
        child_id
    )

    dashboard = get_dashboard_summary(
        db,
        child_id
    )

    risk_score = calculate_risk_score(
        db,
        child_id
    )

    badge = get_safety_badge(
        db,
        child_id
    )

    recommendations = generate_recommendations(
        db,
        child_id
    )

    insights = generate_ai_insights(
        db,
        child_id
    )

    safe_search = get_safe_search(
        db,
        child_id
    )

    return {
        "dashboard": dashboard,
        "risk_score": risk_score,
        "safety_badge": badge,
        "recommendations": recommendations,
        "insights": insights,
        "safe_search": safe_search
    }