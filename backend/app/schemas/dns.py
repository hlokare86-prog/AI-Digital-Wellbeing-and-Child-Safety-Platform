from pydantic import BaseModel


class WebsiteCreate(BaseModel):
    domain: str
    category: str
    is_blocked: bool = True


class WebsiteResponse(BaseModel):
    id: int
    domain: str
    category: str
    is_blocked: bool

    model_config = {
        "from_attributes": True
    }
class DNSCheckRequest(BaseModel):
    domain: str


class DNSCheckResponse(BaseModel):
    domain: str
    status: str
    reason: str    