from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.child import Child


def get_child_or_404(
    db: Session,
    child_id: int
):
    child = (
        db.query(Child)
        .filter(Child.id == child_id)
        .first()
    )

    if child is None:
        raise HTTPException(
            status_code=404,
            detail="Child not found"
        )

    return child