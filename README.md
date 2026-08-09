# 🛡️ MindShield AI – AI-Powered Digital Wellbeing and Child Safety Platform

MindShield AI is an AI-powered Digital Wellbeing and Child Safety Platform designed to help parents monitor, protect, and guide their children's online activities.

The platform combines DNS filtering, parental controls, activity monitoring, screen time management, AI-powered risk assessment, intelligent insights, recommendations, and safety reporting to promote a safer digital environment for children.

---

## 🚀 Features

### 🔐 Authentication

- Parent Registration
- Parent Login
- JWT Authentication
- Password Hashing using bcrypt
- Authenticated User Profile

### 👨‍👩‍👧 Child Management

- Add Child
- View Child Profile
- View Parent's Children
- Delete Child
- Parent-Child Ownership Management

### 🌐 DNS Filtering

- Domain Categorization
- Website Classification
- Allow / Block Websites
- Category-based Filtering
- AI-assisted Domain Categorization
- Website Activity Decision Logging

### 📜 Child Policies

- Category Access Policies
- Time-based Access Policies
- Screen Time Policies
- Safe Search Policies

### ⏰ Screen Time Management

- Daily Screen Time Limits
- Screen Time Usage Tracking
- Automatic Usage Updates
- Screen Time Restriction
- Screen Time Notifications

### 🕐 Time-based Access Control

- Category-specific Time Policies
- Configurable Allowed Time Windows
- Automatic Blocking Outside Allowed Hours

### 🔎 Safe Search

- Google Safe Search
- YouTube Restricted Mode
- Bing Safe Search
- Child-specific Safe Search Configuration

### 📊 Activity Monitoring

- Website Activity Logs
- Browsing Activity Tracking
- Allowed Requests
- Blocked Requests
- Block Reason Tracking
- AI / Database Classification Source Tracking

### 📈 Dashboard

- Parent Dashboard
- Total Requests
- Allowed Requests
- Blocked Requests
- Screen Time Statistics
- Safety Score
- Risk Level

### 🤖 AI Features

- AI Risk Score
- AI-generated Insights
- Intelligent Recommendations
- Safety Badge
- Domain Categorization
- Online Risk Assessment

### 🔔 Notifications

- Parent Notifications
- Security Notifications
- Screen Time Notifications
- Time Policy Notifications
- Blocked Website Notifications
- Read / Unread Notification Management

### 📄 Reports

- Daily Reports
- Weekly Reports
- Safety Score Reports
- Screen Time Reports
- PDF Report Generation

---

# 🛠️ Tech Stack

## Backend

- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- Pydantic
- JWT Authentication
- bcrypt

---

# 📂 Project Structure

```text
AI-Digital-Wellbeing-and-Child-Safety-Platform/
│
├── backend/
│   │
│   ├── app/
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   ├── security.py
│   │   │   └── dependencies.py
│   │   │
│   │   ├── database/
│   │   │   └── database.py
│   │   │
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   ├── child.py
│   │   │   ├── website.py
│   │   │   ├── child_policy.py
│   │   │   ├── activity_log.py
│   │   │   ├── screen_time.py
│   │   │   ├── time_policy.py
│   │   │   ├── notification.py
│   │   │   ├── safe_search.py
│   │   │   └── ...
│   │   │
│   │   ├── schemas/
│   │   │   ├── user.py
│   │   │   ├── child.py
│   │   │   ├── dns.py
│   │   │   ├── activity_log.py
│   │   │   ├── screen_time.py
│   │   │   ├── time_policy.py
│   │   │   ├── notification.py
│   │   │   ├── safe_search.py
│   │   │   └── ...
│   │   │
│   │   ├── routers/
│   │   │   ├── auth.py
│   │   │   ├── child.py
│   │   │   ├── dns.py
│   │   │   ├── child_policy.py
│   │   │   ├── activity_log.py
│   │   │   ├── screen_time.py
│   │   │   ├── time_policy.py
│   │   │   ├── notification.py
│   │   │   ├── safe_search.py
│   │   │   ├── dashboard.py
│   │   │   ├── parent_dashboard.py
│   │   │   ├── risk_score.py
│   │   │   ├── safety_badge.py
│   │   │   ├── recommendation.py
│   │   │   ├── insight.py
│   │   │   ├── report.py
│   │   │   └── pdf_report.py
│   │   │
│   │   ├── services/
│   │   │   ├── auth_service.py
│   │   │   ├── child_service.py
│   │   │   ├── dns_service.py
│   │   │   ├── ai_categorizer.py
│   │   │   ├── activity_log_service.py
│   │   │   ├── screen_time_service.py
│   │   │   ├── time_policy_service.py
│   │   │   ├── notification_service.py
│   │   │   ├── safe_search_service.py
│   │   │   ├── risk_score_service.py
│   │   │   ├── safety_badge_service.py
│   │   │   ├── recommendation_service.py
│   │   │   ├── insight_service.py
│   │   │   ├── report_service.py
│   │   │   ├── weekly_report_service.py
│   │   │   └── pdf_report_service.py
│   │   │
│   │   └── main.py
│   │
│   ├── alembic/
│   │   ├── versions/
│   │   └── ...
│   │
│   ├── requirements.txt
│   ├── .env.example
│   └── ...
│
├── docs/
│
├── tests/
│
└── README.md