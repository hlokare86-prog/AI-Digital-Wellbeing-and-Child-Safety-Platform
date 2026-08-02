from pydantic import BaseModel


class ChildCreate(BaseModel):
    name: str
    age: int
    device_name: str | None = None


class ChildResponse(BaseModel):
    id: int
    name: str
    age: int
    device_name: str | None
    parent_id: int

    model_config = {
        "from_attributes": True
    }