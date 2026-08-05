import pandas as pd

df = pd.read_csv("processed_data/cleaned_dataset.csv")

print("\n========== AI INSIGHTS ==========\n")

if df["total_screen_time_min"].mean() > 300:
    print("• Average screen time is higher than recommended.")

if df["sleep_hours"].mean() < 7:
    print("• Average sleep duration is below the recommended level.")

if df["gaming_time_min"].mean() > 120:
    print("• Gaming activity is comparatively high.")

if df["cyberbullying_risk_score"].mean() > 60:
    print("• Cyberbullying risk requires monitoring.")

if df["predator_risk_score"].mean() > 60:
    print("• Online predator exposure should be monitored.")

print("\nOverall AI Assessment Completed.")