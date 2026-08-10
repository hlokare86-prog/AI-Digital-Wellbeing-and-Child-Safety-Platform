import joblib
import pandas as pd

from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier

from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

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
# Scale data for Logistic Regression
# ==========================================

scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

joblib.dump(scaler, "models/scaler.pkl")

# ==========================================
# Models
# ==========================================

models = {
    "Logistic Regression": LogisticRegression(max_iter=1000),
    "Decision Tree": DecisionTreeClassifier(random_state=42),
    "Random Forest": RandomForestClassifier(
        n_estimators=200,
        random_state=42,
        n_jobs=-1
    )
}

best_accuracy = 0
best_model = None
best_name = ""

for name, model in models.items():

    print("\n" + "=" * 60)
    print(name)
    print("=" * 60)

    if name == "Logistic Regression":
     model.fit(X_train_scaled, y_train)
     predictions = model.predict(X_test_scaled)
    else:
     model.fit(X_train, y_train)
     predictions = model.predict(X_test)

    accuracy = accuracy_score(y_test, predictions)

    print("Accuracy :", round(accuracy * 100, 2), "%")

    print("\nClassification Report\n")
    print(classification_report(y_test, predictions))

    print("\nConfusion Matrix\n")
    print(confusion_matrix(y_test, predictions))

    if accuracy > best_accuracy:
        best_accuracy = accuracy
        best_model = model
        best_name = name

# ==========================================
# Save Best Model
# ==========================================

joblib.dump(best_model, "models/best_model.pkl")

print("\n" + "=" * 60)
print("BEST MODEL")
print("=" * 60)
print(best_name)
print("Accuracy :", round(best_accuracy * 100, 2), "%")
print("\nModel Saved Successfully.")