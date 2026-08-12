from explain import explain_prediction
from recommendation import get_recommendation


def build_response(sample_data, prediction, confidence):

    if prediction == "Benign":
        decision = "ALLOW"

    elif prediction == "Suspicious":
        decision = "REVIEW"

    else:
        decision = "BLOCK"

    return {
        "prediction": prediction,
        "decision": decision,
        "confidence": round(confidence, 2),
        "reasons": explain_prediction(sample_data, prediction),
        "recommendations": get_recommendation(prediction)
    }