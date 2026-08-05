import pandas as pd

df = pd.read_csv("dataset/mindshield_ai_digital_wellbeing_dataset_15000.csv")

print(df.head())
print(df.info())
print(df.describe())
print(df.isnull().sum())
print(df.duplicated().sum())
print(df["risk_level"].value_counts())