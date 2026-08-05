import pandas as pd

df = pd.read_csv("processed_data/final_dataset.csv")

print(df.shape)
print()
print(df["risk_level"].value_counts())