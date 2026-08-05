import pandas as pd

df = pd.read_csv("processed_data/cleaned_dataset.csv")

print("\n========== BEHAVIOUR ANALYSIS ==========\n")

print("Average Screen Time :", round(df["total_screen_time_min"].mean(),2), "minutes")

print("Average Gaming Time :", round(df["gaming_time_min"].mean(),2), "minutes")

print("Average Social Media Time :", round(df["social_media_time_min"].mean(),2), "minutes")

print("Average Educational Time :", round(df["educational_time_min"].mean(),2), "minutes")

print("Average Sleep :", round(df["sleep_hours"].mean(),2), "hours")

print("Average Physical Activity :", round(df["physical_activity_min"].mean(),2), "minutes")

print("\nRisk Level Distribution")

print(df["risk_level"].value_counts())