import joblib
import pandas as pd

from api_response import build_response

# Load model and encoders only once
model = joblib.load("models/best_model.pkl")
encoders = joblib.load("models/label_encoders.pkl")


def predict_dns(sample):

    # Encode categorical values
    encoded = sample.copy()

    for column in encoders:
        if column != "label":
            encoded[column] = encoders[column].transform([encoded[column]])[0]

    df = pd.DataFrame([encoded])

    prediction = model.predict(df)[0]

    prediction = encoders["label"].inverse_transform([prediction])[0]

    confidence = float(model.predict_proba(df).max() * 100)

    return build_response(sample, prediction, confidence)