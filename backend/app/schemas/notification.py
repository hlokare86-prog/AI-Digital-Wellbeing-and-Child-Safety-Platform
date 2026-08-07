from datetime import datetime

from pydantic import BaseModel


class NotificationCreate(BaseModel):
    child_id: int
    title: str
    message: str
    notification_type: str


class NotificationResponse(BaseModel):
    id: int
    child_id: int
    title: str
    message: str
    notification_type: str
    is_read: bool
    created_at: datetime

    model_config = {
        "from_attributes": True
    }