import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder

# ===========================
# Load Clean Dataset
# ===========================

df = pd.read_csv("processed_data/cleaned_dataset.csv")

# ===========================
# Remove Unnecessary Columns
# ===========================

df.drop(
    columns=[
        "record_id",
        "user_id",
        "date"
    ],
    inplace=True
)

# ===========================
# Encode Categorical Features
# ===========================

encoders = {}

categorical_columns = df.select_dtypes(include="object").columns

for column in categorical_columns:

    encoder = LabelEncoder()

    df[column] = encoder.fit_transform(df[column].astype(str))

    encoders[column] = encoder

# ===========================
# Save Encoders
# ===========================

joblib.dump(
    encoders,
    "models/encoders.pkl"
)

# ===========================
# Save Final Dataset
# ===========================

df.to_csv(
    "processed_data/final_dataset.csv",
    index=False
)

print("Feature Engineering Completed Successfully.")
print("Encoded Columns :", list(categorical_columns))
print("Final Dataset Shape :", df.shape)