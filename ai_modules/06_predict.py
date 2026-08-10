import joblib
import pandas as pd

from explain import explain_prediction
from recommendation import get_recommendation
from api_response import build_response

# ==========================================
# Load Model
# ==========================================

model = joblib.load("models/best_model.pkl")

encoders = joblib.load("models/label_encoders.pkl")

# ==========================================
# Sample DNS Request
# (Replace these values with actual input later)
# ==========================================

sample = {
    "device_type": "Android",
    "network_type": "Home WiFi",
    "country_code": "IN",
    "domain_length": 18,
    "subdomain_count": 1,
    "digit_ratio": 0.12,
    "hyphen_count": 1,
    "suspicious_tld": 0,
    "query_type": "A",
    "protocol": "UDP",
    "response_code": "NOERROR",
    "response_time_ms": 42,
    "answer_count": 2,
    "ttl_seconds": 3600,
    "query_frequency_5min": 8,
    "unique_domains_1hr": 15,
    "domain_age_days": 1200,
    "entropy_score": 3.8,
    "is_dga_like": 0,
    "uses_punycode": 0,
    "known_blocklist_match": 0,
    "threat_score": 12
}

print(encoders["device_type"].classes_)
print(encoders["network_type"].classes_)
print(encoders["country_code"].classes_)
print(encoders["query_type"].classes_)
print(encoders["protocol"].classes_)
print(encoders["response_code"].classes_)

# ==========================================
# Encode Categorical Features
# ==========================================

for column in encoders:
    if column != "label":
        sample[column] = encoders[column].transform([sample[column]])[0]

sample_df = pd.DataFrame([sample])

# ==========================================
# Prediction
# ==========================================

prediction = model.predict(sample_df)[0]

prediction = encoders["label"].inverse_transform([prediction])[0]

confidence = model.predict_proba(sample_df).max() * 100

response = build_response(sample, prediction, confidence)

print("=" * 60)
print("DNS FILTER RESULT")
print("=" * 60)

print(f"\nPrediction : {response['prediction']}")
print(f"Decision   : {response['decision']}")
print(f"Confidence : {response['confidence']} %")

print("\nReasons")
for reason in response["reasons"]:
    print("-", reason)

print("\nRecommendations")
for rec in response["recommendations"]:
    print("-", rec)