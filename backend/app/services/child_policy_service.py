from sqlalchemy.orm import Session

from app.models.child_policy import ChildPolicy
from app.schemas.child_policy import ChildPolicyCreate


def create_policy(
    db: Session,
    policy: ChildPolicyCreate
):
    new_policy = ChildPolicy(
        child_id=policy.child_id,
        category=policy.category,
        is_allowed=policy.is_allowed
    )

    db.add(new_policy)
    db.commit()
    db.refresh(new_policy)

    return new_policy


def get_policies_by_child(
    db: Session,
    child_id: int
):
    return (
        db.query(ChildPolicy)
        .filter(ChildPolicy.child_id == child_id)
        .all()
    )


def get_policy(
    db: Session,
    policy_id: int
):
    return (
        db.query(ChildPolicy)
        .filter(ChildPolicy.id == policy_id)
        .first()
    )


def delete_policy(
    db: Session,
    policy_id: int
):
    policy = get_policy(db, policy_id)

    if policy is None:
        return None

    db.delete(policy)
    db.commit()

    return policy