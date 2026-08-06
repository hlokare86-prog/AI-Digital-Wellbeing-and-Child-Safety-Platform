import pandas as pd

# ==========================================
# Load Dataset
# ==========================================

df = pd.read_csv("dataset/dns_filtering_dataset_60000_rows.csv")

print("=" * 60)
print("DNS FILTERING DATASET - EXPLORATORY DATA ANALYSIS")
print("=" * 60)

# ==========================================
# Basic Information
# ==========================================

print("\nDataset Shape")
print(df.shape)

print("\nColumn Names")
print(df.columns.tolist())

print("\nData Types")
print(df.dtypes)

# ==========================================
# Missing Values
# ==========================================

print("\nMissing Values")
print(df.isnull().sum())

# ==========================================
# Duplicate Records
# ==========================================

print("\nDuplicate Rows")
print(df.duplicated().sum())

# ==========================================
# Target Distribution
# ==========================================

print("\nTarget Distribution")

target = df.columns[-1]

print(df[target].value_counts())

print("\nTarget Percentage")

print((df[target].value_counts(normalize=True) * 100).round(2))

# ==========================================
# Numerical Summary
# ==========================================

print("\nNumerical Statistics")

print(df.describe())

# ==========================================
# Categorical Summary
# ==========================================

print("\nCategorical Statistics")

print(df.describe(include="object"))

# ==========================================
# Unique Values
# ==========================================

print("\nUnique Values Per Column")

for column in df.columns:
    print(f"{column}: {df[column].nunique()}")

print("\n" + "="*60)
print("CONTENT CATEGORY VS LABEL")
print("="*60)

print(pd.crosstab(df["content_category"], df["label"]))

print("\n" + "="*60)
print("ACTION VS LABEL")
print("="*60)

print(pd.crosstab(df["action"], df["label"]))

print("\nEDA Completed Successfully.")