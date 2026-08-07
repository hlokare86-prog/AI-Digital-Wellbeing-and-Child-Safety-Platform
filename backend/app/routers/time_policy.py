from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from streamlit import status

from app.database.database import get_db
from app.schemas.time_policy import (
    TimePolicyCreate,
    TimePolicyResponse,
)
from app.services.time_policy_service import (
    create_time_policy,
    get_child_time_policies,
    get_time_policy,
    delete_time_policy,
)

router = APIRouter(
    prefix="/time-policy",
    tags=["Time Policies"]
)


@router.post("", response_model=TimePolicyResponse)
def add_time_policy(
    policy: TimePolicyCreate,
    db: Session = Depends(get_db)
):
    result = create_time_policy(db, policy)

    if result is None:
        raise HTTPException(
            status_code=404,
            detail="Child not found"
        )

    if result == "duplicate":
        raise HTTPException(
            status.HTTP_409_CONFLICT,
            detail="Time policy already exists for this category"
        )

    return result


@router.get("/child/{child_id}", response_model=List[TimePolicyResponse])
def list_child_time_policies(
    child_id: int,
    db: Session = Depends(get_db)
):
    return get_child_time_policies(
        db,
        child_id
    )


@router.get("/{policy_id}", response_model=TimePolicyResponse)
def get_single_time_policy(
    policy_id: int,
    db: Session = Depends(get_db)
):
    policy = get_time_policy(
        db,
        policy_id
    )

    if policy is None:
        raise HTTPException(
            status_code=404,
            detail="Time policy not found"
        )

    return policy


@router.delete("/{policy_id}")
def remove_time_policy(
    policy_id: int,
    db: Session = Depends(get_db)
):
    policy = delete_time_policy(
        db,
        policy_id
    )

    if policy is None:
        raise HTTPException(
            status_code=404,
            detail="Time policy not found"
        )

    return {
        "message": "Time policy deleted successfully"
    }