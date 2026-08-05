from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import (
    auth,
    child,
    dns,
    child_policy,
    activity_log,
    time_policy,
)

app = FastAPI(
    title="MindShield AI",
    description="AI-Powered Digital Wellbeing and Child Safety Platform",
    version="1.0.0",
)

# Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(child.router)
app.include_router(dns.router)
app.include_router(child_policy.router)
app.include_router(activity_log.router)
app.include_router(time_policy.router)


@app.get("/")
def root():
    return {
        "status": "success",
        "message": "MindShield AI Backend is Running 🚀"
    }