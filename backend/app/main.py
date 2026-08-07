from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import (
    activity_log,
    auth,
    child,
    child_policy,
    dashboard,
    dns,
    insight,
    notification,
    parent_dashboard,
    pdf_report,
    recommendation,
    report,
    risk_score,
    safe_search,
    safety_badge,
    screen_time,
    time_policy,
)

app = FastAPI(
    title="MindShield AI",
    description="AI-Powered Digital Wellbeing and Child Safety Platform",
    version="1.0.0",
)

# -------------------------
# CORS Configuration
# -------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------
# Routers
# -------------------------
app.include_router(auth.router)
app.include_router(child.router)
app.include_router(dns.router)
app.include_router(child_policy.router)
app.include_router(activity_log.router)
app.include_router(time_policy.router)
app.include_router(screen_time.router)
app.include_router(dashboard.router)
app.include_router(risk_score.router)
app.include_router(report.router)
app.include_router(pdf_report.router)
app.include_router(notification.router)
app.include_router(insight.router)
app.include_router(safe_search.router)
app.include_router(recommendation.router)
app.include_router(safety_badge.router)
app.include_router(parent_dashboard.router)

# -------------------------
# Root Endpoint
# -------------------------
@app.get("/")
def root():
    return {
        "status": "success",
        "message": "MindShield AI Backend is Running 🚀"
    }