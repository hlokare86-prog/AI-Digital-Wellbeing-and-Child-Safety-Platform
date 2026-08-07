from datetime import datetime

from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.models.category_enum import WebsiteCategory
from app.models.time_policy import TimePolicy
from app.schemas.time_policy import TimePolicyCreate
from app.utils.child_validator import get_child_or_404


def create_time_policy(
    db: Session,
    policy: TimePolicyCreate
):
    # Validate child exists
    get_child_or_404(
        db,
        policy.child_id
    )

    # Prevent duplicate category policy
    existing = (
        db.query(TimePolicy)
        .filter(
            TimePolicy.child_id == policy.child_id,
            TimePolicy.category == policy.category
        )
        .first()
    )

    if existing:
        return "duplicate"

    new_policy = TimePolicy(
        child_id=policy.child_id,
        category=policy.category,
        start_time=policy.start_time,
        end_time=policy.end_time,
        enabled=policy.enabled
    )

    try:
        db.add(new_policy)
        db.commit()
        db.refresh(new_policy)
        return new_policy

    except SQLAlchemyError:
        db.rollback()
        raise


def get_child_time_policies(
    db: Session,
    child_id: int
):
    # Validate child exists
    get_child_or_404(
        db,
        child_id
    )

    return (
        db.query(TimePolicy)
        .filter(TimePolicy.child_id == child_id)
        .all()
    )


def get_time_policy(
    db: Session,
    policy_id: int
):
    return (
        db.query(TimePolicy)
        .filter(TimePolicy.id == policy_id)
        .first()
    )


def delete_time_policy(
    db: Session,
    policy_id: int
):
    policy = get_time_policy(
        db,
        policy_id
    )

    if policy is None:
        return None

    try:
        db.delete(policy)
        db.commit()
        return policy

    except SQLAlchemyError:
        db.rollback()
        raise


def is_time_allowed(
    db: Session,
    child_id: int,
    category: WebsiteCategory
):
    """
    Returns:
        True  -> Current time is inside the allowed window
        False -> Current time is outside the allowed window
        None  -> No enabled time policy exists
    """

    # Validate child exists
    get_child_or_404(
        db,
        child_id
    )

    policy = (
        db.query(TimePolicy)
        .filter(
            TimePolicy.child_id == child_id,
            TimePolicy.category == category,
            TimePolicy.enabled.is_(True)
        )
        .first()
    )

    # No enabled time policy exists
    if policy is None:
        return None

    current_time = datetime.now().time()

    if policy.start_time <= current_time <= policy.end_time:
        return True

    return False