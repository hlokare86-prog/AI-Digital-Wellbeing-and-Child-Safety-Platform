from sqlalchemy.orm import Session

from app.models.website import Website
from app.schemas.dns import WebsiteCreate


def create_website(
    db: Session,
    website: WebsiteCreate
):
    existing = (
        db.query(Website)
        .filter(Website.domain == website.domain)
        .first()
    )

    if existing:
        return None

    new_website = Website(
        domain=website.domain,
        category=website.category,
        is_blocked=website.is_blocked
    )

    db.add(new_website)
    db.commit()
    db.refresh(new_website)

    return new_website


def get_websites(db: Session):
    return db.query(Website).all()


def get_website(
    db: Session,
    website_id: int
):
    return (
        db.query(Website)
        .filter(Website.id == website_id)
        .first()
    )


def delete_website(
    db: Session,
    website_id: int
):
    website = get_website(
        db,
        website_id
    )

    if website is None:
        return None

    db.delete(website)
    db.commit()

    return website

def check_website(
    db: Session,
    domain: str
):
    website = (
        db.query(Website)
        .filter(Website.domain == domain)
        .first()
    )

    if website is None:
        return {
            "domain": domain,
            "status": "UNKNOWN",
            "reason": "Website not found in database"
        }

    if website.is_blocked:
        return {
            "domain": website.domain,
            "status": "BLOCKED",
            "reason": f"{website.category} website is blocked"
        }

    return {
        "domain": website.domain,
        "status": "ALLOWED",
        "reason": f"{website.category} website is allowed"
    }