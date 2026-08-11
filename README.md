# 🛡️ MindShield AI

## AI-Powered Digital Wellbeing and Child Safety Platform

MindShield AI is an AI-powered digital wellbeing and child safety platform
designed to help parents create a safer and healthier digital environment
for children.

The platform combines Artificial Intelligence, Machine Learning, DNS
filtering, parental controls, activity monitoring, screen-time management,
risk assessment, notifications, reporting, and AI-assisted insights into
a centralized system.

MindShield AI helps parents monitor and manage children's digital
activities while providing intelligent safety analysis and recommendations.

---

## 🌟 Overview

Children are increasingly exposed to digital platforms, making online
safety and healthy digital usage important concerns for parents and
guardians.

MindShield AI provides a centralized platform where parents can:

- 👨‍👩‍👧 Manage child profiles
- 🛡️ Configure child safety policies
- 🌐 Filter and classify DNS requests
- 📊 Monitor digital activity
- ⏱️ Manage screen time
- ⚠️ Assess digital safety risks
- 🔔 Receive safety notifications
- 🤖 Access AI-powered insights
- 📑 Generate safety reports

The system uses Machine Learning to classify DNS requests into different
safety categories and supports allow/block decisions based on the
classification and configured parental policies.

---

## 🎯 Project Vision

The vision of MindShield AI is to create a safer and healthier digital
environment for children by combining intelligent technology with
parental management and digital wellbeing tools.

### Core Approach

**Protect → Monitor → Analyze → Inform → Improve**

---

---

## ❗ Problem Statement

Children are increasingly exposed to digital platforms, websites, and
online content. While digital technology provides many benefits, it can
also expose children to unsafe websites, malicious domains, excessive
screen time, inappropriate content, and other online risks.

Parents may also face difficulties in continuously monitoring their
children's digital activities and managing different safety settings
from a single platform.

Traditional parental-control solutions may focus on individual features
such as website blocking or screen-time restrictions. There is a need for
an integrated solution that combines intelligent website classification,
parental controls, activity monitoring, risk assessment, and digital
wellbeing management.

**MindShield AI addresses this problem by providing a centralized,
AI-powered platform for child safety and digital wellbeing.**

---

## 🎯 Objectives

The main objectives of MindShield AI are:

- 🛡️ Improve children's digital safety.
- 🌐 Classify DNS requests using Machine Learning.
- 🚫 Support intelligent website allow/block decisions.
- 👨‍👩‍👧 Provide centralized parental controls.
- 📊 Monitor children's digital activities.
- ⏱️ Manage and monitor screen time.
- ⚠️ Assess digital safety risks.
- 📈 Generate safety scores and risk levels.
- 🤖 Provide AI-assisted insights and recommendations.
- 🔔 Notify parents about important safety events.
- 📑 Generate daily and weekly safety reports.
- 🔐 Provide secure authentication and protected access.

---

## 💡 Key Goals

### 1. Intelligent Safety

Use Machine Learning and AI to identify potentially unsafe digital
activities and domains.

### 2. Parental Control

Give parents the ability to configure policies, manage websites,
control screen time, and manage child profiles.

### 3. Activity Awareness

Provide parents with information about allowed and blocked activities
through monitoring and reporting.

### 4. Digital Wellbeing

Help promote healthier digital habits through screen-time management
and wellbeing insights.

### 5. Risk Awareness

Analyze safety-related information and provide risk levels, safety
scores, and relevant notifications.

---

---

## ✨ Key Features

MindShield AI provides a comprehensive set of features focused on child
safety, parental management, and digital wellbeing.

### 🔐 1. User Authentication

The platform provides secure authentication for parents and authorized
users.

Features include:

- User registration and login
- JWT-based authentication
- Secure password hashing
- Protected API endpoints
- User session management

---

### 👨‍👩‍👧 2. Child Management

Parents can manage child profiles through the platform.

Features include:

- Create child profiles
- Manage child information
- Configure child-specific safety settings
- View child-related safety information

---

### 🛡️ 3. DNS Filtering

The DNS filtering module is one of the core safety features of
MindShield AI.

Machine Learning is used to classify DNS requests into four categories:

| Category | Description |
|---|---|
| `Benign` | Safe or normal DNS request |
| `Malicious` | Potentially harmful or malicious request |
| `Policy_Block` | Request blocked according to configured parental policies |
| `Suspicious` | Request requiring additional attention |

The classification supports intelligent website allow/block decisions.

---

### 📋 4. Child Safety Policies

Parents can configure policies according to the child's safety
requirements.

Policies can include:

- Website restrictions
- Website categories
- Allowed websites
- Blocked websites
- Time-based restrictions
- Screen-time limits
- Safe-search settings

---

### 📊 5. Activity Monitoring

The platform records relevant digital activities to provide parents with
better visibility.

The monitoring system can track:

- Allowed browsing activity
- Blocked browsing activity
- Safety events
- Activity logs
- Policy-related events

---

### ⚠️ 6. Risk Assessment

MindShield AI provides a safety assessment based on relevant digital
safety information.

The system supports:

- Safety scores
- Risk levels
- Safety badges
- Risk-related information for parents

This helps parents understand the overall digital safety status of a
child.

---

### 🤖 7. AI Insights

The platform integrates AI-assisted functionality to provide intelligent
safety support.

AI functionality can be used for:

- Domain categorization
- Safety analysis
- Intelligent insights
- Recommendations

---

### 🔔 8. Notifications

The notification system helps parents stay informed about important
safety events.

Notifications may include:

- Blocked website alerts
- Safety events
- Policy violations
- Important child safety notifications

---

### 📑 9. Reports

MindShield AI provides reporting functionality to help parents review
digital safety information.

The platform supports:

- Daily reports
- Weekly reports
- Safety reports
- PDF report generation

---

### ⏱️ 10. Screen-Time Management

The platform supports screen-time management to encourage healthier
digital habits.

Parents can configure screen-time-related settings and monitor
screen-time information.

---

### 🔎 11. Safe Search

Safe-search controls can be configured as part of the child's digital
safety policies to support safer online searching.

---

### 📱 12. Parent Dashboard

The parent dashboard provides a centralized view of important
child-safety and digital-wellbeing information.

Parents can access:

- Child profiles
- Safety policies
- Activity information
- Safety scores
- Risk levels
- Notifications
- Reports
- AI insights

**---**

**## 🧩 Core Modules**

The major modules of MindShield AI are:

```text
MindShield AI
│
├── Authentication & Security
├── User Management
├── Child Management
├── DNS Filtering
├── Child Safety Policies
├── Activity Monitoring
├── Risk Assessment
├── AI Insights
├── Notifications
├── Screen-Time Management
├── Safe Search
└── Reports

```
---

## 🏗️ System Architecture

MindShield AI follows a modular, layered architecture that separates the
frontend, backend, database, security, and AI/ML components.

```text
                         ┌──────────────────────┐
                         │        Parent        │
                         │       / User         │
                         └──────────┬───────────┘
                                    │
                                    ▼
                    ┌────────────────────────────┐
                    │          Frontend          │
                    │                            │
                    │ Next.js + React             │
                    │ TypeScript                  │
                    │ Tailwind CSS                │
                    │ Lucide Icons                │
                    └─────────────┬──────────────┘
                                  │
                             REST APIs
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │       FastAPI Backend      │
                    │                            │
                    │ Routers                    │
                    │ Services                   │
                    │ Schemas                    │
                    │ Models                     │
                    │ Security                   │
                    └─────────────┬──────────────┘
                                  │
                 ┌────────────────┼────────────────┐
                 │                │                │
                 ▼                ▼                ▼
        ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
        │  PostgreSQL  │  │  AI / ML     │  │   OpenAI API │
        │   Database   │  │  Components  │  │              │
        └──────────────┘  └──────────────┘  └──────────────┘
                 │                │                │
                 │                ▼                │
                 │       ┌─────────────────┐       │
                 │       │  DNS Filtering  │       │
                 │       │  Classification │       │
                 │       └─────────────────┘       │
                 │                                 │
                 └──────────────┬──────────────────┘
                                ▼
                       ┌──────────────────┐
                       │ Safety Analysis  │
                       │ & Risk Assessment│
                       └────────┬─────────┘
                                ▼
                       ┌──────────────────┐
                       │ Parent Dashboard│
                       │ Alerts & Reports│
                       └──────────────────┘

```
---

# 💻 Technology Stack

MindShield AI uses a combination of modern frontend, backend, database,
machine learning, artificial intelligence, security, and development
technologies.

## 🖥️ Frontend Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework for building the web application |
| React | Component-based user interface development |
| TypeScript | Type-safe frontend development |
| Tailwind CSS | Styling and responsive user interface design |
| Lucide | UI icons |
| npm | Package and dependency management |

---

## ⚙️ Backend Technology Stack

| Technology | Purpose |
|---|---|
| Python | Primary backend and machine learning programming language |
| FastAPI | REST API development and backend framework |
| Uvicorn | ASGI server used to run the FastAPI application |
| Pydantic | Request and response data validation |
| python-dotenv | Environment variable and configuration management |

---

## 🗄️ Database & ORM

| Technology | Purpose |
|---|---|
| PostgreSQL | Relational database for storing application data |
| SQLAlchemy | ORM for database models, relationships, and queries |
| Alembic | Database schema migration management |

PostgreSQL stores data related to:

- Users
- Children
- Safety policies
- Websites
- Activity logs
- Screen-time information
- Notifications
- Safety settings
- Reports

---

## 🤖 Machine Learning & AI Technology Stack

| Technology | Purpose |
|---|---|
| Pandas | Dataset loading, cleaning, preprocessing, and analysis |
| NumPy | Numerical operations and data manipulation |
| Scikit-learn | Data preprocessing, feature encoding, model training, and evaluation |
| Random Forest Classifier | Primary machine learning model for DNS classification |
| TensorFlow / Keras | Neural-network-based DNS classification |
| Joblib | Saving and loading trained machine learning models and encoders |
| Matplotlib | Exploratory data analysis and model evaluation visualizations |
| OpenAI API | AI-assisted domain categorization and intelligent safety functionality |

---

## 🛡️ Security Technology Stack

| Technology | Purpose |
|---|---|
| JWT | Authentication and protected user sessions |
| Passlib | Password hashing and verification |
| bcrypt | Secure password hashing |
| python-jose | JWT encoding, decoding, and validation |
| Pydantic | Data validation and schema enforcement |

---

## 🛠️ Development & Testing Tools

| Tool | Purpose |
|---|---|
| Git | Version control |
| GitHub | Collaborative development and source-code management |
| Visual Studio Code | Primary development environment |
| Postman | REST API testing |
| Swagger UI | Interactive API documentation |
| ReDoc | API documentation |

---

## 🔄 Technology Integration

The major technologies work together as follows:

```text
                    ┌───────────────────┐
                    │     Frontend      │
                    │ Next.js + React    │
                    │ TypeScript         │
                    └─────────┬─────────┘
                              │
                           REST API
                              │
                              ▼
                    ┌───────────────────┐
                    │ FastAPI Backend   │
                    │      Python       │
                    └─────────┬─────────┘
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
       ┌──────────┐    ┌─────────────┐   ┌────────────┐
       │PostgreSQL│    │  ML Models  │   │ OpenAI API │
       │ Database │    │ DNS Filter  │   │ AI Insights│
       └──────────┘    └─────────────┘   └────────────┘

```
---

# 🤖 Machine Learning & DNS Filtering

Machine Learning is one of the core components of MindShield AI. It is
used to analyze and classify DNS requests to support safer browsing
decisions.

The DNS filtering system classifies requests into different safety
categories and works together with parental policies to determine
whether a website should be allowed or blocked.

---

## 🎯 DNS Classification

Each DNS request is classified into one of the following categories:

| Category | Description |
|---|---|
| `Benign` | Represents a normal or safe DNS request |
| `Malicious` | Represents a potentially harmful or malicious request |
| `Policy_Block` | Request blocked according to configured parental policies |
| `Suspicious` | Request that may require additional attention |

The classification result is used to support website allow/block
decisions.

---

## 🔄 Machine Learning Pipeline

The machine learning workflow follows these stages:

```text
Raw Dataset
     │
     ▼
Data Loading
     │
     ▼
Data Cleaning
     │
     ▼
Data Preprocessing
     │
     ▼
Feature Engineering
     │
     ▼
Feature Encoding
     │
     ▼
Train / Test Split
     │
     ▼
Model Training
     │
     ▼
Model Evaluation
     │
     ▼
Model Persistence
     │
     ▼
DNS Classification
     │
     ▼
Allow / Block Decision


```
---


## 📊 Data Processing

### Pandas

Pandas is used for:

- Loading datasets
- Cleaning data
- Preprocessing data
- Data analysis
- Data manipulation

### NumPy

NumPy is used for:

- Numerical operations
- Array manipulation
- Mathematical calculations
- Efficient data processing

---

## ⚙️ Machine Learning

Scikit-learn is used throughout the machine learning pipeline for:

- Data preprocessing
- Feature encoding
- Train/test splitting
- Model training
- Model evaluation

### Random Forest Classifier

The **Random Forest Classifier** is used as the primary machine learning
model for DNS classification.

The model analyzes DNS-related features and classifies requests into
different safety categories.

---

## 🧠 Deep Learning

TensorFlow and Keras are used to develop and train a
neural-network-based DNS classification model.

The deep learning component provides an additional approach for
classifying DNS requests and supporting intelligent safety decisions.

---

## 🌐 DNS Classification

The DNS filtering module classifies requests into four categories:

| Category | Description |
|---|---|
| `Benign` | Safe or normal DNS request |
| `Malicious` | Potentially harmful or malicious DNS request |
| `Policy_Block` | Request blocked according to parental policy |
| `Suspicious` | DNS request requiring additional attention |

These classifications support website **allow/block decisions**.

---

---

## 💾 Model Persistence

**Joblib** is used to save and load trained machine learning models and
their associated preprocessing components.

It is used for persisting:

- Trained machine learning models
- Label encoders
- Preprocessing components

Model persistence allows the trained models to be reused for predictions
without requiring the model to be trained again every time the application
starts.

---

## 🌐 DNS Classification

The DNS Filtering module uses machine learning to classify DNS requests
into different safety categories.

The system supports the following classifications:

| Category | Description |
|---|---|
| `Benign` | Represents a safe or normal DNS request |
| `Malicious` | Represents a potentially harmful or malicious DNS request |
| `Policy_Block` | Represents a request blocked according to a configured parental policy |
| `Suspicious` | Represents a DNS request requiring additional attention |

The classification result is used to support website allow/block
decisions.

---

## 🛡️ DNS Filtering Workflow

```text
                  DNS Request
                       │
                       ▼
              Data Preprocessing
                       │
                       ▼
               Feature Encoding
                       │
                       ▼
                ML Classifier
                       │
                       ▼
               DNS Classification
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
       Benign      Malicious    Suspicious
          │            │            │
          └────────────┼────────────┘
                       ▼
               Policy Evaluation
                       │
                 ┌─────┴─────┐
                 ▼           ▼
               ALLOW       BLOCK
                 │           │
                 └─────┬─────┘
                       ▼
                 Activity Log
                       │
                       ▼
                Risk Assessment
                       │
                       ▼
              Parent Notification

```
## 📊 DNS Safety Categories

The DNS Filtering module classifies DNS requests into four safety
categories:

| Category | Description |
|---|---|
| 🟢 `Benign` | Represents a safe or normal DNS request. |
| 🔴 `Malicious` | Represents a potentially harmful or malicious DNS request. |
| 🔵 `Policy_Block` | Represents a request blocked according to configured parental policies. |
| 🟠 `Suspicious` | Represents a DNS request that may require additional attention. |

### 🟢 Benign

A `Benign` classification indicates that the DNS request is considered
safe or normal.

The request can be allowed if it does not violate any configured
parental policies.

### 🔴 Malicious

A `Malicious` classification indicates that the DNS request may be
associated with harmful or unsafe digital activity.

The request can be blocked to improve the child's online safety.

### 🔵 Policy Block

A `Policy_Block` classification indicates that the request has been
blocked based on rules configured by the parent.

This allows parents to apply their own safety restrictions in addition
to machine-learning-based classification.

### 🟠 Suspicious

A `Suspicious` classification indicates that the DNS request may require
additional attention or evaluation.

It can be considered during the overall safety and risk assessment
process.

---

## ⚖️ Allow / Block Decision

The final website decision can consider multiple factors:

- Machine learning classification
- Parent-defined safety policies
- Allowed websites
- Blocked websites
- Category restrictions
- Time-based restrictions
- Safe-search settings

```text
                 DNS Request
                      │
                      ▼
              ML Classification
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
    Benign        Suspicious      Malicious
       │              │              │
       └──────────────┼──────────────┘
                      ▼
              Policy Evaluation
                      │
                ┌─────┴─────┐
                ▼           ▼
              ALLOW        BLOCK


```
---

## 📈 Model Evaluation

The machine learning models are evaluated to understand their
classification performance and reliability.

**Matplotlib** is used to visualize model performance and analyze the
classification results.

The evaluation process can include:

- Classification performance analysis
- Confusion matrix
- Model evaluation plots
- Comparison of predicted and actual classifications
- Exploratory Data Analysis (EDA)

These evaluations help understand how effectively the model classifies
DNS requests into the defined safety categories.

---

## 🔗 Machine Learning Components

| Component | Technology |
|---|---|
| Data Processing | Pandas, NumPy |
| Data Preprocessing | Scikit-learn |
| Classification Model | Random Forest Classifier |
| Deep Learning | TensorFlow / Keras |
| Model Persistence | Joblib |
| Data Visualization | Matplotlib |
| AI Integration | OpenAI API |

---

# ⚙️ Backend Architecture

The MindShield AI backend is developed using **Python and FastAPI**.

The backend follows a modular architecture that separates API routing,
business logic, data validation, database operations, and security.

```text
                    FastAPI Backend
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               ▼               ▼
       Routers         Services         Security
          │               │               │
          ▼               ▼               ▼
       API Layer      Business Logic   Authentication
          │               │
          └───────┬───────┘
                  ▼
              Schemas
                  │
                  ▼
               Models
                  │
                  ▼
             PostgreSQL


```
## 🧩 Backend Components

The MindShield AI backend is divided into multiple components, with each
component responsible for a specific part of the application.

### 🚀 FastAPI

FastAPI is the primary backend framework used to build the REST APIs.

It provides:

- API routing
- Request and response handling
- Dependency injection
- Automatic API documentation
- High-performance API development

### ⚡ Uvicorn

Uvicorn is used as the ASGI server to run the FastAPI application.

### 📋 Pydantic

Pydantic is used for data validation and API schemas.

It handles:

- Request validation
- Response validation
- Data type validation
- API schemas

### 🗄️ SQLAlchemy

SQLAlchemy is used as the Object-Relational Mapper (ORM).

It manages:

- Database models
- Relationships
- Database queries
- Database operations

### 🔄 Alembic

Alembic is used for managing database schema migrations.

It allows database structures to be updated and version-controlled as
the application evolves.

### 🔐 Security Layer

The backend includes a dedicated security layer for authentication and
authorization.

It uses:

- JWT
- Passlib
- bcrypt
- python-jose

The security layer helps protect authenticated routes and user data.

---

# 🧩 Core Backend Modules

The backend contains separate modules for the major functionality of
MindShield AI.

| Module | Purpose |
|---|---|
| **DNS Filtering** | Classifies DNS requests and supports allow/block decisions |
| **Child Policies** | Manages safety rules and restrictions for children |
| **Activity Monitoring** | Records allowed and blocked digital activities |
| **Risk Assessment** | Provides safety scores and risk levels |
| **AI Insights** | Provides AI-assisted safety insights and recommendations |
| **Notifications** | Handles safety alerts and notifications |
| **Reports** | Generates daily, weekly, and safety reports |
| **Screen Time** | Manages screen-time settings and limits |
| **Safe Search** | Supports safer search settings |
| **Authentication** | Handles user authentication and protected access |
| **Parent Dashboard** | Provides centralized child safety information |

---

# 🔄 Backend Request Flow

```text
                     Client Request
                           │
                           ▼
                    FastAPI Router
                           │
                           ▼
                    Authentication
                           │
                           ▼
                    Pydantic Schema
                           │
                           ▼
                       Service
                    Business Logic
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
         ML / AI Services          Database
              │                         │
              └────────────┬────────────┘
                           ▼
                    Processed Result
                           │
                           ▼
                    API Response
                           │
                           ▼
                       Frontend


```
---

# 📚 API Documentation

MindShield AI uses FastAPI to provide REST APIs for communication between
the frontend and backend.

FastAPI automatically generates interactive API documentation.

### Swagger UI

The Swagger UI can be accessed at:

```text
http://localhost:8000/docs

```
---

# 🗄️ Database & Data Management

MindShield AI uses **PostgreSQL** as its relational database.

**SQLAlchemy** is used as the ORM for database operations, while
**Alembic** is used to manage database migrations.

The database stores information related to:

- Users
- Children
- Safety policies
- Websites
- Activity logs
- Screen-time data
- Notifications
- Safety settings
- Reports

---

---

# 🔐 Authentication & Security

MindShield AI uses multiple security mechanisms to protect user accounts
and application data.

- **JWT** — Used for authentication and protected API access.
- **Passlib + bcrypt** — Used for secure password hashing.
- **python-jose** — Used for JWT encoding, decoding, and validation.
- **Pydantic** — Used for request and response data validation.

Sensitive information such as passwords, secret keys, and API keys should
be stored in environment variables and should not be committed to the
repository.

---

---

# ⚙️ Environment Variables & Configuration

MindShield AI uses environment variables to store configuration values
and sensitive credentials.

Create a `.env` file in the backend directory.

Example:

```env
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
JWT_SECRET_KEY=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key

```
---

# ⚙️ Installation & Setup

## Prerequisites

Make sure the following are installed before running the project:

- Python 3.x
- Node.js
- npm
- PostgreSQL
- Git

---

## Clone the Repository

```bash
git clone <repository-url>
cd AI-Digital-Wellbeing-and-Child-Safety-Platform

```
---

# 🚀 Running the Backend

After completing the backend setup and configuring the `.env` file, start
the FastAPI server using:

```bash
uvicorn main:app --reload

```
---

# 🖥️ Frontend Setup & Running the Frontend

Navigate to the frontend directory:

```bash
cd frontend
npm install
npm run dev

```
---

# 🗄️ Database Setup & Migrations

MindShield AI uses **PostgreSQL** for storing application data.

Configure the database connection in the `.env` file:

```env
DATABASE_URL=your_database_url

```
---

# 🧪 API Testing with Postman

MindShield AI APIs can be tested using **Postman**.

Postman can be used to:

- Test API endpoints
- Send HTTP requests
- Verify API responses
- Test authentication
- Validate request and response data

The backend should be running before testing the APIs.

```bash
uvicorn main:app --reload

```
---

# 📁 Project Structure

The MindShield AI project is organized into separate frontend, backend,
and machine learning components.

```text
AI-Digital-Wellbeing-and-Child-Safety-Platform/
│
├── frontend/
│
├── backend/
│   ├── routers/
│   ├── services/
│   ├── schemas/
│   ├── models/
│   ├── core/
│   ├── database/
│   ├── migrations/
│   └── main.py
│
├── ml/
│   ├── data/
│   ├── models/
│   ├── training/
│   └── preprocessing/
│
├── .env.example
├── .gitignore
├── requirements.txt
├── package.json
├── LICENSE
└── README.md

```
---

# 🔀 Git & GitHub Workflow

Git and GitHub are used for version control and collaborative
development.

Each team member works on a separate feature branch to avoid directly
modifying the `main` branch.

### Basic Workflow

```bash
git checkout -b feature/your-feature

git add .

git commit -m "Add feature"

git push origin feature/your-feature

```
## Main Branch

The main branch contains the integrated and reviewed version of the
project.

---

# 🧪 Testing & Validation

MindShield AI uses different tools and methods to test the functionality
of the application.

### API Testing

Backend APIs can be tested using:

- Postman
- Swagger UI
- ReDoc

### Functional Testing

The major features can be tested for:

- User authentication
- Child management
- Safety policy configuration
- DNS filtering
- Activity monitoring
- Screen-time management
- Notifications
- Risk assessment
- Report generation

### Machine Learning Validation

The DNS classification model can be evaluated using:

- Confusion matrix
- Classification metrics
- Evaluation plots
- Test dataset predictions

Testing helps ensure that the application components work correctly and
that the ML model produces reliable classification results.

---

---

# 🔮 Future Scope

MindShield AI can be further enhanced with the following features:

- 📱 Dedicated mobile application
- 🌐 Browser extension for enhanced web protection
- 🤖 More advanced AI and machine learning models
- ⚡ Real-time threat detection
- 📊 Advanced behavioral and activity analytics
- 🎯 Personalized digital wellbeing recommendations
- 🔔 Improved real-time safety alerts
- 🌍 Multilingual support
- 💻 Device-level parental controls
- 📈 Advanced reporting and analytics

These improvements can further enhance the platform's ability to provide
intelligent, personalized, and comprehensive digital safety for children.

---

---

# 👥 Team & Contributions

MindShield AI was developed collaboratively by a team of five members.

| Team Member | Role | Responsibility |
|---|---|---|
| **Sejal** | Team Leader / Project Coordinator | Overall project coordination, conducting meetings, assigning tasks, reviewing team members' work, identifying mistakes, and coordinating project integration |
| **Harsh** | Backend Developer | Backend development, APIs, database integration, and server-side functionality |
| **Aarya** | Frontend Developer | Frontend development, user interface, components, and application integration |
| **Aryan** | Machine Learning Developer | Machine learning models, DNS classification, data processing, and ML integration |
| **Khushboo** | Tester | Application testing, API testing, identifying bugs, and validating functionality |

### 👩‍💻 Team Leader — Sejal

Sejal coordinated the overall development of the project by:

- Conducting and coordinating team meetings
- Dividing and assigning tasks among team members
- Monitoring the progress of each member
- Reviewing submitted work
- Identifying and communicating mistakes
- Coordinating integration of different modules
- Helping resolve development and integration issues
- Maintaining overall project coordination

Each team member worked on their assigned feature branch and contributed
to the final integrated project.

---

---

# 📜 License

This project was developed for educational and internship purposes.

The project is intended to demonstrate the use of Artificial Intelligence,
Machine Learning, web development, backend APIs, database management, and
digital safety technologies.

See the `LICENSE` file for the applicable license information.

---

# ⚠️ Disclaimer

MindShield AI is designed as a digital safety and wellbeing assistance
platform.

It is not intended to replace responsible parental supervision or
professional cybersecurity solutions.

When handling children's data, the application should be deployed with
appropriate privacy, security, consent, and data-protection practices.

---

# ⭐ MindShield AI

### Protect. Monitor. Analyze. Inform. Improve.

---
