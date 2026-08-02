from sqlalchemy.orm import Session

from app.models.child import Child
from app.models.user import User
from app.schemas.child import ChildCreate


def create_child(
    db: Session,
    child: ChildCreate,
    current_user: User
):
    """
    Create a new child for the logged-in parent.
    """

    new_child = Child(
        name=child.name,
        age=child.age,
        device_name=child.device_name,
        parent_id=current_user.id
    )

    db.add(new_child)
    db.commit()
    db.refresh(new_child)

    return new_child


def get_children(
    db: Session,
    current_user: User
):
    """
    Get all children belonging to the logged-in parent.
    """

    return (
        db.query(Child)
        .filter(Child.parent_id == current_user.id)
        .all()
    )


def get_child(
    db: Session,
    child_id: int,
    current_user: User
):
    """
    Get one child by ID.
    """

    return (
        db.query(Child)
        .filter(
            Child.id == child_id,
            Child.parent_id == current_user.id
        )
        .first()
    )


def delete_child(
    db: Session,
    child_id: int,
    current_user: User
):
    """
    Delete a child belonging to the logged-in parent.
    """

    child = get_child(
        db,
        child_id,
        current_user
    )

    if child is None:
        return None

    db.delete(child)
    db.commit()

    return child