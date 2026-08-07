from pydantic import BaseModel


class AIInsight(BaseModel):
    child_id: int
    safety_score: int
    risk_level: str
    summary: str
    recommendations: list[str]
    insights: list[str]