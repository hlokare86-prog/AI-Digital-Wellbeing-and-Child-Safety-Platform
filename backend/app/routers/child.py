from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.dependencies import get_current_user
from app.database.database import get_db
from app.models.user import User
from app.schemas.child import ChildCreate, ChildResponse
from app.services.child_service import (
    create_child,
    get_children,
    get_child,
    delete_child,
)

router = APIRouter(
    prefix="/child",
    tags=["Child Management"]
)


@router.post("", response_model=ChildResponse)
def add_child(
    child: ChildCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return create_child(
        db,
        child,
        current_user,
    )


@router.get("", response_model=List[ChildResponse])
def list_children(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_children(
        db,
        current_user,
    )


@router.get("/{child_id}", response_model=ChildResponse)
def get_single_child(
    child_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    child = get_child(
        db,
        child_id,
        current_user,
    )

    if child is None:
        raise HTTPException(
            status_code=404,
            detail="Child not found",
        )

    return child


@router.delete("/{child_id}")
def remove_child(
    child_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    child = delete_child(
        db,
        child_id,
        current_user,
    )

    if child is None:
        raise HTTPException(
            status_code=404,
            detail="Child not found",
        )

    return {
        "message": "Child deleted successfully"
    }