import pandas as pd

df = pd.read_csv("dataset/mindshield_ai_digital_wellbeing_dataset_15000.csv")

# Remove duplicates
df = df.drop_duplicates()

# Remove rows with missing values
df = df.dropna()

print(df.shape)

df.to_csv("processed_data/cleaned_dataset.csv", index=False)