# AI-Digital-Wellbeing-and-Child-Safety-Platform
AI-powered Digital Wellbeing and Child Safety Platform using DNS filtering, AI content analysis, parental controls, and digital safety monitoring.

# Child Safety Platform - Backend

## Project Description

Brief explanation of the backend.

## Features

- User Authentication
- Child Safety APIs
- Database Integration

## Tech Stack

- FastAPI
- SQLAlchemy
- Alembic
- PostgreSQL

## Installation

pip install -r requirements.txt

## Environment Setup

Copy:

.env.example

to

.env

and update the values.

## Run

uvicorn app.main:app --reload

## API Documentation

http://localhost:8000/docs

## Database Migration

alembic upgrade head
