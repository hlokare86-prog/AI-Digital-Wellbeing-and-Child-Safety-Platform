from typing import List

from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status,
)
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.dns import (
    DNSCheckRequest,
    DNSCheckResponse,
    WebsiteCreate,
    WebsiteResponse,
)
from app.services.dns_service import (
    check_website,
    create_website,
    delete_website,
    get_website,
    get_websites,
)

router = APIRouter(
    prefix="/dns",
    tags=["DNS Filtering"],
)


@router.post(
    "",
    response_model=WebsiteResponse,
    status_code=status.HTTP_201_CREATED,
)
def add_website(
    website: WebsiteCreate,
    db: Session = Depends(get_db),
):
    new_website = create_website(db, website)

    if new_website is None:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Website already exists",
        )

    return new_website


@router.get(
    "",
    response_model=List[WebsiteResponse],
)
def list_websites(
    db: Session = Depends(get_db),
):
    return get_websites(db)


@router.get(
    "/{website_id}",
    response_model=WebsiteResponse,
)
def get_single_website(
    website_id: int,
    db: Session = Depends(get_db),
):
    website = get_website(db, website_id)

    if website is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Website not found",
        )

    return website


@router.delete("/{website_id}")
def remove_website(
    website_id: int,
    db: Session = Depends(get_db),
):
    website = delete_website(
        db,
        website_id,
    )

    if website is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Website not found",
        )

    return {
        "message": "Website deleted successfully"
    }


@router.post(
    "/check",
    response_model=DNSCheckResponse,
)
def check_domain(
    request: DNSCheckRequest,
    db: Session = Depends(get_db),
):
    return check_website(
        db,
        request.child_id,
        request.domain,
    )