from pydantic import BaseModel


class ChildPolicyCreate(BaseModel):
    child_id: int
    category: str
    is_allowed: bool


class ChildPolicyResponse(BaseModel):
    id: int
    child_id: int
    category: str
    is_allowed: bool

    class Config:
        from_attributes = True