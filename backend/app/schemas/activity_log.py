from datetime import datetime

from pydantic import BaseModel


class ActivityLogCreate(BaseModel):
    child_id: int
    domain: str
    category: str
    decision: str
    reason: str
    source: str
    confidence: int = 100


class ActivityLogResponse(BaseModel):
    id: int
    child_id: int
    domain: str
    category: str
    decision: str
    reason: str
    source: str
    confidence: int
    timestamp: datetime

    model_config = {
        "from_attributes": True
    }