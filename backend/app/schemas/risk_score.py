from pydantic import BaseModel


class RiskScoreResponse(BaseModel):
    child_id: int
    safety_score: int
    risk_level: str
    summary: str
    recommendations: list[str]