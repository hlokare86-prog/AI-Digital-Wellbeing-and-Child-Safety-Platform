from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import Session

from app.models.safe_search import SafeSearch
from app.schemas.safe_search import (
    SafeSearchCreate,
    SafeSearchUpdate,
)
from app.utils.child_validator import get_child_or_404


def create_safe_search(
    db: Session,
    data: SafeSearchCreate
):
    # Validate child exists
    get_child_or_404(
        db,
        data.child_id
    )

    existing = (
        db.query(SafeSearch)
        .filter(SafeSearch.child_id == data.child_id)
        .first()
    )

    if existing:
        return None

    safe_search = SafeSearch(
        child_id=data.child_id,
        google_enabled=data.google_enabled,
        youtube_restricted=data.youtube_restricted,
        bing_safe_search=data.bing_safe_search
    )

    try:
        db.add(safe_search)
        db.commit()
        db.refresh(safe_search)
        return safe_search

    except SQLAlchemyError:
        db.rollback()
        raise


def get_safe_search(
    db: Session,
    child_id: int
):
    # Validate child exists
    get_child_or_404(
        db,
        child_id
    )

    return (
        db.query(SafeSearch)
        .filter(SafeSearch.child_id == child_id)
        .first()
    )


def update_safe_search(
    db: Session,
    child_id: int,
    data: SafeSearchUpdate
):
    # Validate child exists
    get_child_or_404(
        db,
        child_id
    )

    safe_search = get_safe_search(
        db,
        child_id
    )

    if safe_search is None:
        return None

    safe_search.google_enabled = data.google_enabled
    safe_search.youtube_restricted = data.youtube_restricted
    safe_search.bing_safe_search = data.bing_safe_search

    try:
        db.commit()
        db.refresh(safe_search)
        return safe_search

    except SQLAlchemyError:
        db.rollback()
        raise