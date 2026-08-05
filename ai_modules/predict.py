import joblib
import pandas as pd

from recommendation import get_recommendations
from explain import explain_prediction

# Load model
model = joblib.load("models/risk_model.pkl")

# -----------------------------
# CHANGE THESE VALUES TO TEST
# -----------------------------
sample = {
    "age": 15,
    "day_type": 1,
    "app_name": 25,
    "app_category": 2,
    "session_count": 12,
    "total_screen_time_min": 420,
    "average_session_min": 35,
    "late_night_usage_min": 60,
    "educational_time_min": 30,
    "social_media_time_min": 180,
    "gaming_time_min": 150,
    "video_time_min": 90,
    "productivity_time_min": 20,
    "browser_time_min": 40,
    "communication_time_min": 70,
    "breaks_taken": 3,
    "longest_continuous_session_min": 95,
    "notifications_received": 180,
    "inappropriate_content_flags": 2,
    "cyberbullying_risk_score": 75,
    "predator_risk_score": 68,
    "search_toxicity_score": 50,
    "sleep_hours": 5,
    "physical_activity_min": 20,
    "study_time_min": 40,
    "parent_limit_min": 180,
    "limit_exceeded_min": 120,
    "educational_content_ratio": 0.18,
    "week_over_week_change_pct": 15
}

df = pd.DataFrame([sample])

prediction = int(model.predict(df)[0])

risk_map = {
    0: "Low",
    1: "Medium",
    2: "High",
    3: "Critical"
}

prediction = risk_map[prediction]

confidence = model.predict_proba(df).max()

print("=" * 50)
print("MindShield AI Prediction")
print("=" * 50)

print("Risk Level :", prediction)
print("Confidence :", round(confidence * 100, 2), "%")

print("\nRecommendations")
for r in get_recommendations(sample):
    print("-", r)

print("\nReasons")
for r in explain_prediction(sample):
    print("-", r)