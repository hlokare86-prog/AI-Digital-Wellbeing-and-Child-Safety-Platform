import os
import pandas as pd
import matplotlib.pyplot as plt

# Create plots folder automatically if it doesn't exist
os.makedirs("plots", exist_ok=True)

df = pd.read_csv("processed_data/cleaned_dataset.csv")

# Risk Level Distribution
plt.figure(figsize=(6,4))
df["risk_level"].value_counts().plot(kind="bar")
plt.title("Risk Level Distribution")
plt.xlabel("Risk Level")
plt.ylabel("Count")
plt.tight_layout()
plt.savefig("plots/risk_level_distribution.png")

# Screen Time Distribution
plt.figure(figsize=(6,4))
plt.hist(df["total_screen_time_min"], bins=20)
plt.title("Screen Time Distribution")
plt.xlabel("Minutes")
plt.ylabel("Users")
plt.tight_layout()
plt.savefig("plots/screen_time_distribution.png")

print("Visualizations saved successfully.")