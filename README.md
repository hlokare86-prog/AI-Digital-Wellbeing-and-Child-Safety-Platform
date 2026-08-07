# 🛡️ MindShield AI – AI-Powered Digital Wellbeing and Child Safety Platform

MindShield AI is an AI-powered Digital Wellbeing and Child Safety Platform designed to help parents monitor, protect, and guide their children's online activities. The platform combines DNS filtering, parental controls, AI-driven risk assessment, activity monitoring, screen time management, and intelligent recommendations to promote a safer digital environment.

---

## 🚀 Features

### 🔐 Authentication
- Parent Registration
- Parent Login
- JWT Authentication
- Password Hashing (bcrypt)

### 👨‍👩‍👧 Child Management
- Add Child
- Update Child
- Delete Child
- View Child Profile

### 🌐 DNS Filtering
- Domain Categorization
- Website Classification
- Allow / Block Websites
- Category-based Filtering

### 📜 Child Policies
- Category Access Policies
- Time-based Access Policies
- Screen Time Policies
- Safe Search Policies

### 📊 Activity Monitoring
- Website Activity Logs
- Browsing History
- Blocked Requests
- Allowed Requests

### 📈 Dashboard
- Parent Dashboard
- Child Dashboard
- Daily Statistics
- Weekly Statistics

### 🤖 AI Features
- AI Risk Score
- AI Insights
- AI Recommendations
- Safety Badge

### 📄 Reports
- Daily Report
- Weekly Report
- PDF Report Generation

### 🔔 Notifications
- Parent Notifications
- System Notifications

---

# 🛠️ Tech Stack

## Backend
- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL
- Pydantic
- JWT Authentication

## AI / Machine Learning
- Python
- Scikit-learn
- Pandas
- NumPy

## Frontend (Upcoming)
- React.js

---

# 📂 Project Structure

```
AI-Digital-Wellbeing-and-Child-Safety-Platform
│
├── backend/
├── frontend/
├── ai_modules/
├── dataset/
├── docs/
├── uploads/
├── tests/
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to backend

```bash
cd backend
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run database migrations

```bash
alembic upgrade head
```

Start FastAPI

```bash
uvicorn app.main:app --reload
```

---

# 🔑 Environment Variables

Create a `.env` file using `.env.example`.

Example:

```
DATABASE_URL=postgresql://username:password@localhost:5432/mindshield_db

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

# 📚 API Documentation

After running the server:

Swagger UI

```
http://localhost:8000/docs
```

ReDoc

```
http://localhost:8000/redoc
```

---

# 🧪 Testing

The backend has been tested for:

- Authentication
- Child Management
- DNS Filtering
- Child Policies
- Activity Logs
- Time Policies
- Screen Time
- Dashboard
- Risk Score
- Reports
- Notifications
- AI Insights
- Recommendations
- Safe Search
- Safety Badge
- Parent Dashboard

---

# 🚧 Future Enhancements

- React Frontend
- Mobile Application
- AI Model Integration
- Real-Time DNS Monitoring
- Cloud Deployment
- Multi-language Support

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Developer

**Harshvardhan Lokare**

Artificial Intelligence & Machine Learning Student

MindShield AI – Final Year Major Project