from sqlalchemy.orm import Session

from app.models.website import Website
from app.models.child_policy import ChildPolicy

from app.schemas.dns import WebsiteCreate

from app.services.ai_categorizer import classify_domain
from app.services.activity_log_service import log_activity


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
    child_id: int,
    domain: str
):
    # Normalize domain
    domain = domain.lower().strip()

    # Find website in database
    website = (
        db.query(Website)
        .filter(Website.domain == domain)
        .first()
    )

    source = "Database"

    # Website not found -> AI categorization
    if website is None:

        category = classify_domain(domain)

        website = Website(
            domain=domain,
            category=category,
            is_blocked=False
        )

        db.add(website)
        db.commit()
        db.refresh(website)

        source = "AI"

    # Find child's policy
    policy = (
        db.query(ChildPolicy)
        .filter(
            ChildPolicy.child_id == child_id,
            ChildPolicy.category == website.category
        )
        .first()
    )

    # No policy -> allow
    if policy is None:

        log_activity(
            db=db,
            child_id=child_id,
            domain=domain,
            category=website.category.value,
            decision="ALLOWED",
            reason="No policy exists for this category",
            source=source,
            confidence=100
        )

        return {
            "domain": domain,
            "category": website.category,
            "status": "ALLOWED",
            "reason": "No policy exists for this category"
        }

    # Policy allows access
    if policy.is_allowed:

        log_activity(
            db=db,
            child_id=child_id,
            domain=domain,
            category=website.category.value,
            decision="ALLOWED",
            reason=f"{website.category.value} is allowed",
            source=source,
            confidence=100
        )

        return {
            "domain": domain,
            "category": website.category,
            "status": "ALLOWED",
            "reason": f"{website.category.value} is allowed"
        }

    # Policy blocks access

    log_activity(
        db=db,
        child_id=child_id,
        domain=domain,
        category=website.category.value,
        decision="BLOCKED",
        reason=f"{website.category.value} is blocked",
        source=source,
        confidence=100
    )

    return {
        "domain": domain,
        "category": website.category,
        "status": "BLOCKED",
        "reason": f"{website.category.value} is blocked"
    }