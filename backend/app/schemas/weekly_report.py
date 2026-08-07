from pydantic import BaseModel
from datetime import date


class WeeklyReport(BaseModel):
    child_id: int

    week_start: date
    week_end: date

    total_requests: int
    allowed_requests: int
    blocked_requests: int

    average_daily_screen_time: float
    average_safety_score: float