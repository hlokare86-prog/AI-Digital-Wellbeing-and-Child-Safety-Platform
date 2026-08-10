import joblib
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix,
    ConfusionMatrixDisplay
)
from sklearn.preprocessing import StandardScaler

# ==========================================
# Load Dataset
# ==========================================

df = pd.read_csv("processed_data/final_dataset.csv")

target = "label"

X = df.drop(columns=[target])
y = df[target]

# ==========================================
# Train Test Split
# ==========================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# ==========================================
# Load Best Model
# ==========================================

model = joblib.load("models/best_model.pkl")

# ==========================================
# Scale if Logistic Regression
# ==========================================

if model.__class__.__name__ == "LogisticRegression":
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)

# ==========================================
# Prediction
# ==========================================

predictions = model.predict(X_test)

# ==========================================
# Evaluation
# ==========================================

print("=" * 60)
print("MODEL EVALUATION")
print("=" * 60)

print("\nAccuracy")
print(accuracy_score(y_test, predictions))

print("\nClassification Report")
print(classification_report(y_test, predictions))

print("\nConfusion Matrix")
cm = confusion_matrix(y_test, predictions)
print(cm)

# ==========================================
# Save Confusion Matrix
# ==========================================

import os
os.makedirs("plots", exist_ok=True)

disp = ConfusionMatrixDisplay(confusion_matrix=cm)

disp.plot()

plt.title("Confusion Matrix")

plt.savefig("plots/confusion_matrix.png")

plt.close()

print("\nConfusion Matrix saved successfully.")