from app.models.category_enum import WebsiteCategory


def classify_domain(domain: str) -> WebsiteCategory:
    """
    AI categorization service.
    Version 1:
    Rule-based categorizer.

    Later:
    - ML model
    - LLM
    """

    domain = domain.lower()

    social_media = [
        "facebook",
        "instagram",
        "snapchat",
        "twitter",
        "x.com",
        "tiktok",
        "reddit",
        "discord",
        "threads"
    ]

    streaming = [
        "youtube",
        "netflix",
        "primevideo",
        "hotstar",
        "spotify"
    ]

    gaming = [
        "steam",
        "epicgames",
        "roblox",
        "minecraft"
    ]

    education = [
        "wikipedia",
        "coursera",
        "udemy",
        "khanacademy",
        "w3schools",
        "geeksforgeeks"
    ]

    adult = [
        "porn",
        "xxx",
        "xvideos",
        "xnxx",
        "pornhub"
    ]

    gambling = [
        "bet",
        "casino",
        "gambling"
    ]

    if any(site in domain for site in adult):
        return WebsiteCategory.ADULT

    if any(site in domain for site in gambling):
        return WebsiteCategory.GAMBLING

    if any(site in domain for site in social_media):
        return WebsiteCategory.SOCIAL_MEDIA

    if any(site in domain for site in streaming):
        return WebsiteCategory.STREAMING

    if any(site in domain for site in gaming):
        return WebsiteCategory.GAMING

    if any(site in domain for site in education):
        return WebsiteCategory.EDUCATION

    return WebsiteCategory.OTHER