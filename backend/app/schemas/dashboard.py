from pydantic import BaseModel


class DashboardResponse(BaseModel):
    total_requests: int
    blocked_requests: int
    allowed_requests: int
    screen_time_used: int
    safety_score: int