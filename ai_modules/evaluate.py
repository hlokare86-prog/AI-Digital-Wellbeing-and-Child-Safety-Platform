import joblib
import pandas as pd

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    classification_report
)

from sklearn.model_selection import train_test_split

# Load Dataset
df = pd.read_csv("processed_data/final_dataset.csv")

target = "risk_level"

X = df.drop(columns=[
    target,
    "recommended_action",
    "needs_parent_alert",
    "digital_wellbeing_score"
])

y = df[target]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

model = joblib.load("models/risk_model.pkl")

predictions = model.predict(X_test)

print("\n========== MODEL EVALUATION ==========")

print("Accuracy :", accuracy_score(y_test, predictions))
print("Precision :", precision_score(y_test, predictions, average="weighted", zero_division=0))
print("Recall :", recall_score(y_test, predictions, average="weighted", zero_division=0))
print("F1 Score :", f1_score(y_test, predictions, average="weighted", zero_division=0))

print("\nClassification Report")
print(classification_report(y_test, predictions, zero_division=0))

print("\nConfusion Matrix")
print(confusion_matrix(y_test, predictions))