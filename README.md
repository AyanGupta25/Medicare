# 🏥 MediCare

<p align="center">
  <strong>Full-Stack Hospital Management System</strong>
</p>

<p align="center">
  A modern healthcare platform for managing patients, doctors, appointments, services, and hospital administration.
</p>

<p align="center">
  <a href="https://github.com/AyanGupta25/Medicare">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React.js">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express.js">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" alt="JWT">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
</p>

---

## 📌 About

**MediCare** is a full-stack **Hospital Management System** developed using the **MERN stack**.

The application provides a centralized platform for managing essential hospital workflows such as **patient authentication, doctor management, appointment booking, hospital services, reviews, and administrative operations**.

The system follows a separate frontend-backend architecture where the React frontend communicates with a Node.js and Express REST API, while MongoDB Atlas is used for persistent data storage.

### Key Capabilities

- 👤 Patient registration and authentication
- 👨‍⚕️ Doctor management
- 📅 Appointment booking and management
- 🏥 Hospital service management
- ⭐ Patient reviews
- 🛡️ Admin management and CRUD operations
- 🔐 JWT-based authentication and authorization
- 🗄️ MongoDB Atlas database integration

---

# ✨ Features

## 🔐 Authentication

- User registration and login
- JWT-based authentication
- Protected routes and APIs
- Role-based authorization
- Secure password handling

---

## 👤 Patient Management

- Patient account creation
- Secure login
- Patient information management
- Appointment management
- Review submission

---

## 👨‍⚕️ Doctor Management

- View available doctors
- Manage doctor information
- Doctor CRUD operations
- Centralized doctor management

---

## 📅 Appointment Management

Patients can book appointments through the platform, while administrators can manage appointment records and their status.

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
