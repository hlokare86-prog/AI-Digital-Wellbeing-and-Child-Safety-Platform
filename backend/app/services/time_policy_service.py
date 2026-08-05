from datetime import datetime

from sqlalchemy.orm import Session

from app.models.category_enum import WebsiteCategory
from app.models.child import Child
from app.models.time_policy import TimePolicy
from app.schemas.time_policy import TimePolicyCreate


def create_time_policy(
    db: Session,
    policy: TimePolicyCreate
):
    # Check if child exists
    child = (
        db.query(Child)
        .filter(Child.id == policy.child_id)
        .first()
    )

    if child is None:
        return None

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

    db.add(new_policy)
    db.commit()
    db.refresh(new_policy)

    return new_policy


def get_child_time_policies(
    db: Session,
    child_id: int
):
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
    policy = get_time_policy(db, policy_id)

    if policy is None:
        return None

    db.delete(policy)
    db.commit()

    return policy


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

    policy = (
        db.query(TimePolicy)
        .filter(
            TimePolicy.child_id == child_id,
            TimePolicy.category == category,
            TimePolicy.enabled == True
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