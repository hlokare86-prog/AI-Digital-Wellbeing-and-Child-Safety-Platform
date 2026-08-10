# AI-Digital-Wellbeing-and-Child-Safety-Platform
AI-powered Digital Wellbeing and Child Safety Platform using DNS filtering, AI content analysis, parental controls, and digital safety monitoring.

# DNS Filtering AI Module

## Overview

This module is responsible for detecting whether a DNS request is safe or unsafe using Machine Learning.

The model classifies every DNS request into one of the following categories:

- Benign
- Malicious
- Policy_Block
- Suspicious

---

## Dataset

Dataset Name:
DNS Filtering Dataset (60,000 Records)

Number of Records:
60,000

Target Column:
label

Classes:
- Benign
- Malicious
- Policy_Block
- Suspicious

---

## Machine Learning Pipeline

1. Exploratory Data Analysis (EDA)
2. Data Preprocessing
3. Feature Engineering
4. Model Training
5. Model Evaluation
6. Prediction
7. Explainability
8. Recommendation Generation

---

## Models Trained

- Logistic Regression
- Random Forest
- TensorFlow Neural Network

---

## Best Model

Random Forest

Accuracy:
98.24%

---

## Project Structure

ai_modules/
- 01_eda.py
- 02_preprocess.py
- 03_train_models.py
- 04_evaluate_models.py
- 05_tensorflow_train.py
- 06_predict.py
- explain.py
- recommendation.py
- api_response.py
- ml_service.py

models/
- best_model.pkl
- label_encoders.pkl
- tensorflow_model.keras
- tensorflow_scaler.pkl

processed_data/
- final_dataset.csv

plots/
- confusion_matrix.png

---

## Input Features

- device_type
- network_type
- country_code
- domain_length
- subdomain_count
- digit_ratio
- hyphen_count
- suspicious_tld
- query_type
- protocol
- response_code
- response_time_ms
- answer_count
- ttl_seconds
- query_frequency_5min
- unique_domains_1hr
- domain_age_days
- entropy_score
- is_dga_like
- uses_punycode
- known_blocklist_match
- threat_score

---

## Output

Prediction:
- Benign
- Malicious
- Policy_Block
- Suspicious

Decision:
- Allow
- Block
- Review

Confidence Score

Reasons for Prediction

Recommendations

---

## Required Files

- best_model.pkl
- label_encoders.pkl

These files are required by the backend/frontend to load the trained Machine Learning model.

---

## Author

Aryan Mali

Machine Learning Module
DNS Filtering & Child Online Safety Platform