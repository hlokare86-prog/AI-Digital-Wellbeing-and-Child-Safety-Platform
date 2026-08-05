from datetime import datetime

from pydantic import BaseModel


class ScreenTimeCreate(BaseModel):
    child_id: int
    daily_limit_minutes: int
    enabled: bool = True


class ScreenTimeResponse(BaseModel):
    id: int
    child_id: int
    daily_limit_minutes: int
    used_minutes: int
    enabled: bool
    last_reset: datetime

    model_config = {
        "from_attributes": True
    }