from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.models.notification import Notification
from app.schemas.notification import NotificationCreate
from app.utils.child_validator import get_child_or_404


def create_notification(
    db: Session,
    notification: NotificationCreate
):
    get_child_or_404(
        db,
        notification.child_id
    )

    new_notification = Notification(
        child_id=notification.child_id,
        title=notification.title,
        message=notification.message,
        notification_type=notification.notification_type
    )

    try:
        db.add(new_notification)
        db.commit()
        db.refresh(new_notification)
        return new_notification

    except SQLAlchemyError:
        db.rollback()
        raise


def get_notifications(
    db: Session,
    child_id: int
):
    get_child_or_404(
        db,
        child_id
    )

    return (
        db.query(Notification)
        .filter(Notification.child_id == child_id)
        .order_by(Notification.created_at.desc())
        .all()
    )


def mark_as_read(
    db: Session,
    notification_id: int
):
    notification = (
        db.query(Notification)
        .filter(Notification.id == notification_id)
        .first()
    )

    if notification is None:
        return None

    notification.is_read = True

    try:
        db.commit()
        db.refresh(notification)
        return notification

    except SQLAlchemyError:
        db.rollback()
        raise


def create_system_notification(
    db: Session,
    child_id: int,
    title: str,
    message: str,
    notification_type: str
):
    get_child_or_404(
        db,
        child_id
    )

    notification = Notification(
        child_id=child_id,
        title=title,
        message=message,
        notification_type=notification_type
    )

    try:
        db.add(notification)
        db.commit()
        db.refresh(notification)
        return notification

    except SQLAlchemyError:
        db.rollback()
        raise