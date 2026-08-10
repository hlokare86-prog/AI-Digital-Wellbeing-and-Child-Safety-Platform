import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder

print("=" * 60)
print("DNS FILTERING - DATA PREPROCESSING")
print("=" * 60)

# Load dataset
df = pd.read_csv("dataset/dns_filtering_dataset_60000_rows.csv")

# ==========================================================
# Remove unnecessary and leakage columns
# ==========================================================

columns_to_drop = [
    "record_id",
    "timestamp",
    "client_id",
    "client_ip",
    "domain",
    "content_category",
    "action"
]

df.drop(columns=columns_to_drop, inplace=True)

print("\nDropped Columns:")
print(columns_to_drop)

# ==========================================================
# Encode categorical columns
# ==========================================================

encoders = {}

categorical_columns = df.select_dtypes(include="object").columns

for column in categorical_columns:
    encoder = LabelEncoder()
    df[column] = encoder.fit_transform(df[column].astype(str))
    encoders[column] = encoder

print("\nEncoded Columns:")
print(list(categorical_columns))

# ==========================================================
# Save processed dataset
# ==========================================================

df.to_csv("processed_data/final_dataset.csv", index=False)

joblib.dump(encoders, "models/label_encoders.pkl")

print("\nProcessed dataset saved successfully.")
print("Label encoders saved successfully.")

print("\nFinal Shape:")
print(df.shape)

print("\nPreview:")
print(df.head())