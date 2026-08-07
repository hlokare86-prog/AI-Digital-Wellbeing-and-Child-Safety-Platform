from pydantic import BaseModel

from app.schemas.dashboard import DashboardResponse
from app.schemas.risk_score import RiskScoreResponse
from app.schemas.safety_badge import SafetyBadgeResponse
from app.schemas.recommendation import RecommendationResponse
from app.schemas.insight import AIInsight
from app.schemas.safe_search import SafeSearchResponse


class ParentDashboardResponse(BaseModel):
    dashboard: DashboardResponse
    risk_score: RiskScoreResponse
    safety_badge: SafetyBadgeResponse
    recommendations: RecommendationResponse
    insights: AIInsight
    safe_search: SafeSearchResponse