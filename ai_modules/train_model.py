import pandas as pd
import joblib

from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

# ==============================
# Load Dataset
# ==============================

df = pd.read_csv("processed_data/final_dataset.csv")

target = "risk_level"

# Remove leakage columns
X = df.drop(columns=[
    target,
    "recommended_action",
    "needs_parent_alert",
    "digital_wellbeing_score"
])

y = df[target]

# ==============================
# Train Test Split
# ==============================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# ==============================
# Models
# ==============================

models = {
    "Logistic Regression": LogisticRegression(max_iter=1000),
    "Decision Tree": DecisionTreeClassifier(random_state=42),
    "Random Forest": RandomForestClassifier(
        n_estimators=100,
        random_state=42
    )
}

best_model = None
best_accuracy = 0

for name, model in models.items():

    print("\n" + "=" * 50)
    print(name)
    print("=" * 50)

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    accuracy = accuracy_score(y_test, predictions)

    print("Accuracy :", accuracy)

    print(classification_report(
        y_test,
        predictions,
        zero_division=0
    ))

    print("Confusion Matrix")

    print(confusion_matrix(
        y_test,
        predictions
    ))

    cv = cross_val_score(
        model,
        X,
        y,
        cv=5
    )

    print("Cross Validation :", cv.mean())

    if accuracy > best_accuracy:
        best_accuracy = accuracy
        best_model = model

# ==============================
# Save Best Model
# ==============================

joblib.dump(
    best_model,
    "models/risk_model.pkl"
)

print("\nBest Accuracy :", best_accuracy)
print("Model Saved Successfully.")