from pydantic import BaseModel


class RecommendationResponse(BaseModel):
    child_id: int
    recommendations: list[str]