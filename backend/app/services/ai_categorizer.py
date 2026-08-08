import os

from dotenv import load_dotenv
from openai import OpenAI

from app.models.category_enum import WebsiteCategory


# Load environment variables from .env
load_dotenv()

# Create OpenAI client
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)


# ---------------------------------------------------------
# Rule-based categorization
# ---------------------------------------------------------

def rule_based_category(domain: str):
    domain = domain.lower().strip()

    social_media = [
        "facebook",
        "instagram",
        "snapchat",
        "twitter",
        "x.com",
        "tiktok",
        "reddit",
        "discord",
        "threads",
    ]

    streaming = [
        "youtube",
        "netflix",
        "primevideo",
        "hotstar",
        "spotify",
    ]

    gaming = [
        "steam",
        "epicgames",
        "roblox",
        "minecraft",
    ]

    education = [
        "wikipedia",
        "coursera",
        "udemy",
        "khanacademy",
        "w3schools",
        "geeksforgeeks",
    ]

    adult = [
        "porn",
        "xxx",
        "xvideos",
        "xnxx",
        "pornhub",
    ]

    gambling = [
        "bet",
        "casino",
        "gambling",
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

    return None


# ---------------------------------------------------------
# AI categorization
# ---------------------------------------------------------

def ai_category(domain: str) -> WebsiteCategory:

    if not os.getenv("OPENAI_API_KEY"):
        return WebsiteCategory.OTHER

    try:

        response = client.responses.create(
            model="gpt-5.5",
            instructions="""
You are a website safety classification system.

Classify the given website domain into exactly ONE
of these categories:

SOCIAL_MEDIA
STREAMING
GAMING
EDUCATION
ADULT
GAMBLING
OTHER

Return ONLY the category name.
Do not explain your answer.
""",
            input=f"Website domain: {domain}",
        )

        result = response.output_text.strip().upper()

        category_map = {
            "SOCIAL_MEDIA": WebsiteCategory.SOCIAL_MEDIA,
            "STREAMING": WebsiteCategory.STREAMING,
            "GAMING": WebsiteCategory.GAMING,
            "EDUCATION": WebsiteCategory.EDUCATION,
            "ADULT": WebsiteCategory.ADULT,
            "GAMBLING": WebsiteCategory.GAMBLING,
            "OTHER": WebsiteCategory.OTHER,
        }

        return category_map.get(
            result,
            WebsiteCategory.OTHER
        )

    except Exception as e:

        print(
            f"AI categorization failed for {domain}: {e}"
        )

        # Safe fallback
        return WebsiteCategory.OTHER


# ---------------------------------------------------------
# Main categorization function
# ---------------------------------------------------------

def classify_domain(domain: str) -> WebsiteCategory:

    domain = domain.lower().strip()

    # First try fast local rules
    category = rule_based_category(domain)

    if category is not None:
        return category

    # Unknown domain -> OpenAI
    return ai_category(domain)