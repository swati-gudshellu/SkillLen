# SkillLen

## Overview

SkillLen is a web application that analyzes a developer’s skills and suggests the most suitable career path such as Frontend, Backend, or Full-Stack Developer.
The system also identifies missing skills and provides learning suggestions to help users improve their profile.

## Live Demo

Live Website: skilllen.netlify.app

## Features

* User Authentication (Signup / Login / Password Reset)
* Skill Selection Interface
* Developer Role Recommendation
* Skill Match Score with Progress Bar
* Matched Skills vs Missing Skills Analysis
* Learning Suggestions for Improvement
* Logout functionality

## Technologies Used

Frontend:

* HTML
* CSS
* JavaScript

Backend / Services:

* Firebase Authentication

Deployment:

* Netlify

## Project Structure

skillsync-pro
│
├── index.html (Login / Signup page)
├── skills.html (Skill selection page)
├── dashboard.html (Skill analysis dashboard)
├── style.css (UI styling)
├── firebase.js (Firebase configuration)
├── auth.js (Authentication logic)
├── skills.js (Skill selection logic)
└── dashboard.js (Skill analysis logic)

## How It Works

1. Users create an account or login.
2. After login, they select their technical skills.
3. The system compares user skills with predefined developer role requirements.
4. It calculates a skill match percentage.
5. The dashboard displays:

   * Recommended developer role
   * Skill match score
   * Matched skills
   * Missing skills
   * Suggested skills to learn



