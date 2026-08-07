from pydantic import BaseModel


class SafeSearchCreate(BaseModel):
    child_id: int
    google_enabled: bool = True
    youtube_restricted: bool = True
    bing_safe_search: bool = True


class SafeSearchUpdate(BaseModel):
    google_enabled: bool
    youtube_restricted: bool
    bing_safe_search: bool


class SafeSearchResponse(BaseModel):
    id: int
    child_id: int
    google_enabled: bool
    youtube_restricted: bool
    bing_safe_search: bool

    model_config = {
        "from_attributes": True
    }