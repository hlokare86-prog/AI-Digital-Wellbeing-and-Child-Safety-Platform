from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from streamlit import status

from app.database.database import get_db

from app.schemas.safe_search import (
    SafeSearchCreate,
    SafeSearchUpdate,
    SafeSearchResponse
)

from app.services.safe_search_service import (
    create_safe_search,
    get_safe_search,
    update_safe_search
)

router = APIRouter(
    prefix="/safe-search",
    tags=["Safe Search"]
)


@router.post(
    "/",
    response_model=SafeSearchResponse
)
def create_settings(
    data: SafeSearchCreate,
    db: Session = Depends(get_db)
):
    settings = create_safe_search(
        db,
        data
    )

    if settings is None:
        raise HTTPException(
            status_code=400,
            detail="Safe Search settings already exist."
        )

    return settings


@router.get(
    "/{child_id}",
    response_model=SafeSearchResponse
)
def get_settings(
    child_id: int,
    db: Session = Depends(get_db)
):
    settings = get_safe_search(
        db,
        child_id
    )

    if settings is None:
        raise HTTPException(
            status_code=404,
            detail="Safe Search settings not found."
        )

    return settings


@router.put(
    "/{child_id}",
    response_model=SafeSearchResponse
)
def update_settings(
    child_id: int,
    data: SafeSearchUpdate,
    db: Session = Depends(get_db)
):
    settings = update_safe_search(
        db,
        child_id,
        data
    )

    if settings is None:
        raise HTTPException(
            status.HTTP_409_CONFLICT,
            detail="Safe Search settings not found."
        )

    return settings