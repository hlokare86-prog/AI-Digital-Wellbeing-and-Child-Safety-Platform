from fastapi import FastAPI
from app.routers import auth, child, dns
app = FastAPI(
    title="MindShield AI",
    description="AI-Powered Digital Wellbeing and Child Safety Platform",
    version="1.0.0",
)
app.include_router(auth.router)
app.include_router(child.router)
app.include_router(dns.router) 
@app.get("/")
def root():
    return {
        "status": "success",
        "message": "MindShield AI Backend is Running 🚀"
    }