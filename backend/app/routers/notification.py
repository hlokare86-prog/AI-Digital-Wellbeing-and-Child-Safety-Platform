from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from streamlit import status

from app.database.database import get_db

from app.schemas.notification import (
    NotificationCreate,
    NotificationResponse
)

from app.services.notification_service import (
    create_notification,
    get_notifications,
    mark_as_read
)

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"]
)


# -------------------------
# Create Notification
# -------------------------
@router.post(
    "/",
    response_model=NotificationResponse
)
def add_notification(
    notification: NotificationCreate,
    db: Session = Depends(get_db)
):
    return create_notification(
        db,
        notification
    )


# -------------------------
# Get Child Notifications
# -------------------------
@router.get(
    "/child/{child_id}",
    response_model=list[NotificationResponse]
)
def child_notifications(
    child_id: int,
    db: Session = Depends(get_db)
):
    return get_notifications(
        db,
        child_id
    )


# -------------------------
# Mark Notification as Read
# -------------------------
@router.put(
    "/read/{notification_id}",
    response_model=NotificationResponse
)
def read_notification(
    notification_id: int,
    db: Session = Depends(get_db)
):
    notification = mark_as_read(
        db,
        notification_id
    )

    if notification is None:
        raise HTTPException(
            status.HTTP_404_NOT_FOUND,
            detail="Notification not found"
        )

    return notification