import joblib
import pandas as pd
import numpy as np
import tensorflow as tf

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, accuracy_score
from sklearn.utils.class_weight import compute_class_weight

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint

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
# Feature Scaling
# ==========================================

scaler = StandardScaler()

X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

joblib.dump(scaler, "models/tensorflow_scaler.pkl")

# ==========================================
# Class Weights
# ==========================================

classes = np.unique(y_train)

weights = compute_class_weight(
    class_weight="balanced",
    classes=classes,
    y=y_train
)

class_weights = dict(zip(classes, weights))

# ==========================================
# TensorFlow Model
# ==========================================

model = Sequential([
    Dense(128, activation="relu", input_shape=(X_train.shape[1],)),
    Dropout(0.3),

    Dense(64, activation="relu"),
    Dropout(0.3),

    Dense(32, activation="relu"),

    Dense(len(classes), activation="softmax")
])

model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)

# ==========================================
# Callbacks
# ==========================================

early_stop = EarlyStopping(
    monitor="val_loss",
    patience=5,
    restore_best_weights=True
)

checkpoint = ModelCheckpoint(
    "models/tensorflow_model.keras",
    save_best_only=True
)

# ==========================================
# Training
# ==========================================

history = model.fit(
    X_train,
    y_train,
    validation_split=0.2,
    epochs=30,
    batch_size=64,
    class_weight=class_weights,
    callbacks=[early_stop, checkpoint],
    verbose=1
)

# ==========================================
# Evaluation
# ==========================================

predictions = model.predict(X_test)

predictions = np.argmax(predictions, axis=1)

print("\nAccuracy:", accuracy_score(y_test, predictions))

print("\nClassification Report\n")

print(classification_report(y_test, predictions))

print("\nTensorFlow model saved successfully.")