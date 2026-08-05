from enum import Enum

class WebsiteCategory(str, Enum):
    ADULT = "Adult"
    SOCIAL_MEDIA = "Social Media"
    GAMING = "Gaming"
    EDUCATION = "Education"
    ENTERTAINMENT = "Entertainment"
    VIOLENCE = "Violence"
    GAMBLING = "Gambling"
    SHOPPING = "Shopping"
    PRODUCTIVITY = "Productivity"
    NEWS = "News"
    STREAMING = "Streaming"
    SEARCH_ENGINE = "Search Engine"
    MESSAGING = "Messaging"
    E_COMMERCE = "E-Commerce"
    OTHER = "Other"

    def __str__(self):
        return self.value