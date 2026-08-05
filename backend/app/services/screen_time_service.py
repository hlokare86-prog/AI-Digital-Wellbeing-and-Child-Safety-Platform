from datetime import datetime

from sqlalchemy.orm import Session

from app.models.child import Child
from app.models.screen_time import ScreenTime
from app.schemas.screen_time import ScreenTimeCreate


def create_screen_time(
    db: Session,
    screen_time: ScreenTimeCreate
):
    child = (
        db.query(Child)
        .filter(Child.id == screen_time.child_id)
        .first()
    )

    if child is None:
        return None

    existing = (
        db.query(ScreenTime)
        .filter(ScreenTime.child_id == screen_time.child_id)
        .first()
    )

    if existing:
        return "duplicate"

    new_limit = ScreenTime(
        child_id=screen_time.child_id,
        daily_limit_minutes=screen_time.daily_limit_minutes,
        enabled=screen_time.enabled
    )

    db.add(new_limit)
    db.commit()
    db.refresh(new_limit)

    return new_limit


def get_child_screen_time(
    db: Session,
    child_id: int
):
    return (
        db.query(ScreenTime)
        .filter(ScreenTime.child_id == child_id)
        .first()
    )


def delete_screen_time(
    db: Session,
    screen_time_id: int
):
    limit = (
        db.query(ScreenTime)
        .filter(ScreenTime.id == screen_time_id)
        .first()
    )

    if limit is None:
        return None

    db.delete(limit)
    db.commit()

    return limit


def reset_if_new_day(
    db: Session,
    child_id: int
):
    limit = get_child_screen_time(db, child_id)

    if limit is None:
        return

    today = datetime.now().date()

    if limit.last_reset.date() != today:
        limit.used_minutes = 0
        limit.last_reset = datetime.now()

        db.commit()


def increase_usage(
    db: Session,
    child_id: int,
    minutes: int = 1
):
    limit = get_child_screen_time(db, child_id)

    if limit is None:
        return

    reset_if_new_day(db, child_id)

    limit.used_minutes += minutes

    db.commit()


def check_screen_time(
    db: Session,
    child_id: int
):
    limit = get_child_screen_time(db, child_id)

    if limit is None:
        return None

    if not limit.enabled:
        return None

    reset_if_new_day(db, child_id)

    if limit.used_minutes >= limit.daily_limit_minutes:
        return False

    return True