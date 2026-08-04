from pydantic import BaseModel
from app.models.category_enum import WebsiteCategory


class WebsiteCreate(BaseModel):
    domain: str
    category: WebsiteCategory
    is_blocked: bool = True


class WebsiteResponse(BaseModel):
    id: int
    domain: str
    category: WebsiteCategory
    is_blocked: bool

    model_config = {
        "from_attributes": True
    }


class DNSCheckRequest(BaseModel):
    child_id: int
    domain: str


class DNSCheckResponse(BaseModel):
    domain: str
    status: str
    reason: str