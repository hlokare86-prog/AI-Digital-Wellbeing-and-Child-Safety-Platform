from pydantic import BaseModel


class SafetyBadgeResponse(BaseModel):
    child_id: int
    safety_score: int
    badge: str
    color: str