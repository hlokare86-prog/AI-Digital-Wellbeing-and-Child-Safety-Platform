from sqlalchemy.orm import Session

from app.models.website import Website
from app.models.child_policy import ChildPolicy

from app.schemas.dns import WebsiteCreate

from app.services.ai_categorizer import classify_domain
from app.services.activity_log_service import log_activity
from app.services.screen_time_service import (
    check_screen_time,
    increase_usage,
)
from app.services.notification_service import (
    create_system_notification,
)
from app.services.time_policy_service import is_time_allowed


def create_website(
    db: Session,
    website: WebsiteCreate,
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
        is_blocked=website.is_blocked,
    )

    db.add(new_website)
    db.commit()
    db.refresh(new_website)

    return new_website


def get_websites(db: Session):
    return db.query(Website).all()


def get_website(
    db: Session,
    website_id: int,
):
    return (
        db.query(Website)
        .filter(Website.id == website_id)
        .first()
    )


def delete_website(
    db: Session,
    website_id: int,
):
    website = get_website(
        db,
        website_id,
    )

    if website is None:
        return None

    db.delete(website)
    db.commit()

    return website


def check_website(
    db: Session,
    child_id: int,
    domain: str,
):
    # ---------------------------------------------------------
    # 1. Normalize domain
    # ---------------------------------------------------------
    domain = domain.lower().strip()

    # ---------------------------------------------------------
    # 2. Find website in database
    # ---------------------------------------------------------
    website = (
        db.query(Website)
        .filter(Website.domain == domain)
        .first()
    )

    source = "Database"

    # ---------------------------------------------------------
    # 3. Website not found -> AI categorization
    # ---------------------------------------------------------
    if website is None:
        category = classify_domain(domain)

        website = Website(
            domain=domain,
            category=category,
            is_blocked=False,
        )

        db.add(website)
        db.commit()
        db.refresh(website)

        source = "AI"

    # ---------------------------------------------------------
    # 4. Check child's category policy
    # ---------------------------------------------------------
    policy = (
        db.query(ChildPolicy)
        .filter(
            ChildPolicy.child_id == child_id,
            ChildPolicy.category == website.category,
        )
        .first()
    )

    # ---------------------------------------------------------
    # 5. Explicit category policy blocks access
    # ---------------------------------------------------------
    if policy is not None and not policy.is_allowed:

        log_activity(
            db=db,
            child_id=child_id,
            domain=domain,
            category=website.category.value,
            decision="BLOCKED",
            reason=f"{website.category.value} is blocked",
            source=source,
            confidence=100,
        )

        create_system_notification(
            db=db,
            child_id=child_id,
            title="Blocked Website",
            message=f"Attempted to access {domain}",
            notification_type="SECURITY",
        )

        return {
            "domain": domain,
            "category": website.category,
            "status": "BLOCKED",
            "reason": f"{website.category.value} is blocked",
        }

    # ---------------------------------------------------------
    # 6. Check time policy
    #
    # True  -> access is inside allowed time
    # False -> access is outside allowed time
    # None  -> no enabled time policy exists
    # ---------------------------------------------------------
    time_allowed = is_time_allowed(
        db=db,
        child_id=child_id,
        category=website.category,
    )

    if time_allowed is False:

        log_activity(
            db=db,
            child_id=child_id,
            domain=domain,
            category=website.category.value,
            decision="BLOCKED",
            reason="Website access is outside the allowed time window",
            source=source,
            confidence=100,
        )

        create_system_notification(
            db=db,
            child_id=child_id,
            title="Time Policy Restriction",
            message=(
                f"Access to {domain} is not allowed at this time."
            ),
            notification_type="TIME_POLICY",
        )

        return {
            "domain": domain,
            "category": website.category,
            "status": "BLOCKED",
            "reason": "Website access is outside the allowed time window",
        }

    # ---------------------------------------------------------
    # 7. Check screen time
    # ---------------------------------------------------------
    screen_allowed = check_screen_time(
        db,
        child_id,
    )

    if screen_allowed is False:

        log_activity(
            db=db,
            child_id=child_id,
            domain=domain,
            category=website.category.value,
            decision="BLOCKED",
            reason="Daily screen time limit exceeded",
            source=source,
            confidence=100,
        )

        create_system_notification(
            db=db,
            child_id=child_id,
            title="Screen Time Limit Reached",
            message="Daily screen time limit exceeded.",
            notification_type="SCREEN_TIME",
        )

        return {
            "domain": domain,
            "category": website.category,
            "status": "BLOCKED",
            "reason": "Daily screen time limit exceeded",
        }

    # ---------------------------------------------------------
    # 8. Increase screen-time usage
    # ---------------------------------------------------------
    if screen_allowed is True:
        increase_usage(
            db,
            child_id,
        )

    # ---------------------------------------------------------
    # 9. Determine allowed-access reason
    # ---------------------------------------------------------
    if policy is None:
        reason = "No category policy exists; access allowed"
    else:
        reason = f"{website.category.value} is allowed"

    # ---------------------------------------------------------
    # 10. Log allowed activity
    # ---------------------------------------------------------
    log_activity(
        db=db,
        child_id=child_id,
        domain=domain,
        category=website.category.value,
        decision="ALLOWED",
        reason=reason,
        source=source,
        confidence=100,
    )

    # ---------------------------------------------------------
    # 11. Return final decision
    # ---------------------------------------------------------
    return {
        "domain": domain,
        "category": website.category,
        "status": "ALLOWED",
        "reason": reason,
    }