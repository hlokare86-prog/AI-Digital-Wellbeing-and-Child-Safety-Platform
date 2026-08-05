from datetime import time

from pydantic import BaseModel

from app.models.category_enum import WebsiteCategory


class TimePolicyCreate(BaseModel):
    child_id: int
    category: WebsiteCategory
    start_time: time
    end_time: time
    enabled: bool = True


class TimePolicyResponse(BaseModel):
    id: int
    child_id: int
    category: WebsiteCategory
    start_time: time
    end_time: time
    enabled: bool

    model_config = {
        "from_attributes": True
    }