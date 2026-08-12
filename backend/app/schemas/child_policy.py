from pydantic import BaseModel

from app.models.category_enum import WebsiteCategory


class ChildPolicyCreate(BaseModel):
    child_id: int
    category: WebsiteCategory
    is_allowed: bool


class ChildPolicyResponse(BaseModel):
    id: int
    child_id: int
    category: WebsiteCategory
    is_allowed: bool

    model_config = {
        "from_attributes": True
    }