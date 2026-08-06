from fastapi import APIRouter
from ai_modules.ml_service import predict_dns

router = APIRouter()


@router.post("/predict")
def predict(data: dict):
    result = predict_dns(data)
    return result