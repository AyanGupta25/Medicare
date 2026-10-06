# 🏥 MediCare

<p align="center">
  <strong>Full-Stack Hospital Management System</strong>
</p>

<p align="center">
  A modern healthcare platform for managing patients, doctors, appointments, services, reviews, and hospital administration.
</p>

<p align="center">
  <a href="https://github.com/AyanGupta25/Medicare">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React.js">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" alt="JWT">
</p>

---

## 📌 Overview

**MediCare** is a full-stack **Hospital Management System** developed using the **MERN stack**.

The application provides a centralized platform for managing important healthcare workflows including:

- Patient registration and authentication
- Doctor management
- Appointment booking
- Appointment status management
- Hospital services
- Patient reviews
- Administrative operations
- Role-based access control

The project follows a **separated frontend-backend architecture**, where the React frontend communicates with a Node.js and Express REST API. MongoDB Atlas is used for persistent cloud data storage.

---

# 🎯 Problem Statement

Traditional hospital management can involve multiple disconnected processes for handling patients, doctors, appointments, services, and administrative tasks.

MediCare aims to provide a centralized digital platform that simplifies these workflows by bringing them together into one system.

The application allows patients to interact with hospital services while administrators can manage important hospital resources through centralized CRUD operations.

---

# ✨ Features

## 🔐 Authentication & Authorization

- User registration
- User login
- JWT-based authentication
- Protected API routes
- Role-based authorization
- Secure password handling
- Authentication middleware

---

## 👤 Patient Management

Patients can:

- Create an account
- Log in securely
- Manage patient information
- Browse doctors
- Book appointments
- Manage appointment-related information
- Submit reviews

---

## 👨‍⚕️ Doctor Management

The system provides centralized doctor management.

Features include:

- View doctors
- Doctor information management
- Add doctors
- Update doctor information
- Delete doctors
- Manage doctor records through the admin system

---

## 📅 Appointment Management

Patients can book appointments through the platform.

Administrators can manage appointment records and update their status.

### Appointment Workflow

```text
Patient
   │
   ▼
Select Doctor
   │
   ▼
Book Appointment
   │
   ▼
Appointment Created
   │
   ▼
Admin Management
   │
   ▼
Appointment Status Updated
