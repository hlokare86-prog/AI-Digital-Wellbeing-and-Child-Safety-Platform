from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.child_policy import (
    ChildPolicyCreate,
    ChildPolicyResponse,
)
from app.services.child_policy_service import (
    create_policy,
    get_policies_by_child,
    get_policy,
    delete_policy,
)

router = APIRouter(
    prefix="/policy",
    tags=["Child Policies"]
)


@router.post("", response_model=ChildPolicyResponse)
def add_policy(
    policy: ChildPolicyCreate,
    db: Session = Depends(get_db)
):
    new_policy = create_policy(db, policy)

    if new_policy is None:
        raise HTTPException(
            status_code=404,
            detail="Child not found"
        )

    if new_policy == "duplicate":
        raise HTTPException(
            status_code=409,
            detail="Policy already exists for this category"
        )

    return new_policy


@router.get("/child/{child_id}", response_model=List[ChildPolicyResponse])
def list_child_policies(
    child_id: int,
    db: Session = Depends(get_db)
):
    return get_policies_by_child(db, child_id)


@router.get("/{policy_id}", response_model=ChildPolicyResponse)
def get_single_policy(
    policy_id: int,
    db: Session = Depends(get_db)
):
    policy = get_policy(db, policy_id)

    if policy is None:
        raise HTTPException(
            status_code=404,
            detail="Policy not found"
        )

    return policy


@router.delete("/{policy_id}")
def remove_policy(
    policy_id: int,
    db: Session = Depends(get_db)
):
    policy = delete_policy(db, policy_id)

    if policy is None:
        raise HTTPException(
            status_code=404,
            detail="Policy not found"
        )

    

    return {
        "message": "Policy deleted successfully"
    }