from pydantic import BaseModel


class DailyReport(BaseModel):
    child_id: int
    total_requests: int
    allowed_requests: int
    blocked_requests: int
    screen_time_used: int
    safety_score: int