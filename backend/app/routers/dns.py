from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.dns import (
    WebsiteCreate,
    WebsiteResponse,
    DNSCheckRequest,
    DNSCheckResponse,
)
from app.services.dns_service import (
    create_website,
    get_websites,
    get_website,
    delete_website,
    check_website,
)

router = APIRouter(
    prefix="/dns",
    tags=["DNS Filtering"]
)


@router.post("", response_model=WebsiteResponse)
def add_website(
    website: WebsiteCreate,
    db: Session = Depends(get_db)
):
    new_website = create_website(db, website)

    if new_website is None:
        raise HTTPException(
            status_code=400,
            detail="Website already exists"
        )

    return new_website


@router.get("", response_model=List[WebsiteResponse])
def list_websites(
    db: Session = Depends(get_db)
):
    return get_websites(db)


@router.get("/{website_id}", response_model=WebsiteResponse)
def get_single_website(
    website_id: int,
    db: Session = Depends(get_db)
):
    website = get_website(db, website_id)

    if website is None:
        raise HTTPException(
            status_code=404,
            detail="Website not found"
        )

    return website


@router.delete("/{website_id}")
def remove_website(
    website_id: int,
    db: Session = Depends(get_db)
):
    website = delete_website(
        db,
        website_id
    )

    if website is None:
        raise HTTPException(
            status_code=404,
            detail="Website not found"
        )

    return {
        "message": "Website deleted successfully"
    }


@router.post("/check", response_model=DNSCheckResponse)
def check_domain(
    request: DNSCheckRequest,
    db: Session = Depends(get_db)
):
    return check_website(
        db,
        request.child_id,
        request.domain
    )