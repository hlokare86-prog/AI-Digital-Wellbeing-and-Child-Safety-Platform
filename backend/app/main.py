from fastapi import FastAPI
from app.routers import dashboard
from app.routers import screen_time
from app.routers import risk_score
from app.routers import (
    auth,
    child,
    dns,
    child_policy,
    activity_log,
    time_policy,
    screen_time
)

app = FastAPI(
    title="MindShield AI",
    description="AI-Powered Digital Wellbeing and Child Safety Platform",
    version="1.0.0",
)

app.include_router(auth.router)
app.include_router(child.router)
app.include_router(dns.router)
app.include_router(child_policy.router)
app.include_router(activity_log.router)
app.include_router(time_policy.router)
app.include_router(screen_time.router)
app.include_router(dashboard.router)
app.include_router(risk_score.router)
@app.get("/")
def root():
    return {
        "status": "success",
        "message": "MindShield AI Backend is Running 🚀"
    }