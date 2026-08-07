from pydantic import BaseModel, Field

from app.models.category_enum import WebsiteCategory


class WebsiteCreate(BaseModel):
    domain: str = Field(..., min_length=3, max_length=255)
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
    domain: str = Field(..., min_length=3, max_length=255)


class DNSCheckResponse(BaseModel):
    domain: str
    category: WebsiteCategory
    status: str
    reason: str