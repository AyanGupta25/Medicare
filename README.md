# 🏥 MediCare

<p align="center">
  <strong>Full-Stack Hospital Management System</strong>
</p>

<p align="center">
  A modern healthcare platform for managing patients, doctors, appointments, services, and hospital administration.
</p>

<p align="center">
  <a href="https://github.com/AyanGupta25/Medicare">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white" alt="JWT">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
</p>

---

## 📌 About

**MediCare** is a full-stack Hospital Management System built with the **MERN stack**.

The platform provides a centralized system for managing essential healthcare workflows, including **patient authentication, doctor management, appointment booking, hospital services, reviews, and administrative operations**.

The application follows a separated frontend-backend architecture where the React client communicates with a Node.js/Express REST API, while MongoDB Atlas provides persistent cloud storage.

### What MediCare provides

- 👤 Patient registration and authentication
- 👨‍⚕️ Doctor management
- 📅 Appointment booking and status management
- 🏥 Hospital service management
- ⭐ Patient reviews
- 🛡️ Admin operations and CRUD functionality
- 🔐 JWT-based authentication and authorization
- ☁️ Cloud deployment

---

## ✨ Features

### 🔐 Authentication

- User registration and login
- JWT-based authentication
- Protected routes and APIs
- Role-based authorization
- Secure password handling

### 👤 Patient Management

- Patient account creation
- Secure login
- Patient information management
- Appointment management
- Review submission

### 👨‍⚕️ Doctor Management

- View doctors
- Manage doctor information
- Doctor CRUD operations
- Centralized doctor data

### 📅 Appointment Management

Patients can book appointments through the platform while administrators can manage appointment records and statuses.

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
Status Updated
```

### 🏥 Services

- Display hospital services
- Manage service information
- Centralized service management

### ⭐ Reviews

- Patients can submit reviews
- Reviews can be managed through the administrative system

### 🛡️ Admin Panel

The admin system provides centralized CRUD operations for:

- Doctors
- Patients
- Appointments
- Services
- Reviews

---

# 🏗️ Architecture

```text
                         ┌──────────────────┐
                         │      USER        │
                         │ Patient / Admin  │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │  React Frontend  │
                         │     + Vite       │
                         └────────┬─────────┘
                                  │
                             REST API
                                  │
                                  ▼
                         ┌──────────────────┐
                         │ Node.js + Express│
                         │     Backend      │
                         └────────┬─────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                    ▼                           ▼
             ┌──────────────┐           ┌──────────────┐
             │ JWT / Auth   │           │ Controllers  │
             │ Middleware   │           │ & Routes     │
             └──────────────┘           └──────┬───────┘
                                                │
                                                ▼
                                        ┌──────────────┐
                                        │   Mongoose   │
                                        └──────┬───────┘
                                               │
                                               ▼
                                        ┌──────────────┐
                                        │ MongoDB Atlas│
                                        └──────────────┘
```

---

# 🛠️ Tech Stack

## Frontend

| Technology | Usage |
|---|---|
| **React.js** | Frontend UI |
| **Vite** | Development and build tooling |
| **React Router** | Client-side routing |
| **Tailwind CSS** | Responsive styling |
| **Axios** | API communication |
| **JavaScript** | Application logic |

## Backend

| Technology | Usage |
|---|---|
| **Node.js** | Server runtime |
| **Express.js** | REST API |
| **MongoDB** | Database |
| **MongoDB Atlas** | Cloud database |
| **Mongoose** | Database modeling |
| **JWT** | Authentication |
| **bcrypt** | Password hashing |
| **dotenv** | Environment configuration |
| **CORS** | Cross-origin requests |

## Deployment

```text
Frontend  → Vercel
Backend   → Render
Database  → MongoDB Atlas
```

---

# 📂 Project Structure

```text
Medicare/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── medicare/
│   └── medicare/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── middleware/
│       ├── config/
│       ├── server.js
│       ├── package.json
│       └── package-lock.json
│
├── .gitignore
└── README.md
```

### Frontend

```text
frontend/
```

Responsible for:

- User interface
- Navigation
- Authentication screens
- Doctor and service pages
- Appointment interface
- API integration

### Backend

```text
medicare/medicare/
```

Responsible for:

- REST APIs
- Authentication
- Authorization
- Business logic
- Database operations
- CRUD functionality

---

# 🔌 API Modules

The backend is organized into modular API sections:

| Module | Responsibility |
|---|---|
| 🔐 Auth | Registration & authentication |
| 👨‍⚕️ Doctors | Doctor management |
| 👤 Patients | Patient management |
| 📅 Appointments | Appointment management |
| 🏥 Services | Hospital services |
| ⭐ Reviews | Reviews and feedback |

High-level API structure:

```text
/api/auth
/api/doctors
/api/patients
/api/appointments
/api/services
/api/reviews
```

---

# 🔄 Authentication Flow

```text
                  LOGIN
                    │
                    ▼
             React Frontend
                    │
                    ▼
             Express API
                    │
                    ▼
           Verify Credentials
                    │
                    ▼
              Generate JWT
                    │
                    ▼
             Return Token
                    │
                    ▼
             Authenticated
                 Client
                    │
                    ▼
          Protected API Request
                    │
                    ▼
            JWT Middleware
                    │
                    ▼
             Verify Token
                    │
                    ▼
           Authorized Request
```

---

# 🗄️ Database

MediCare uses **MongoDB Atlas** for cloud-based data storage and **Mongoose** for database modeling.

Core application entities include:

```text
Users
Doctors
Patients
Appointments
Services
Reviews
```

The backend uses separate models and API modules to keep database operations organized and maintainable.

---

# 🚀 Getting Started

## Prerequisites

Make sure the following are installed:

- [Node.js](https://nodejs.org/)
- npm
- Git
- MongoDB Atlas account

---

## 1. Clone the Repository

```bash
git clone https://github.com/AyanGupta25/Medicare.git

cd Medicare
```

---

## 2. Backend Setup

The backend is located at:

```text
medicare/medicare/
```

Navigate to the backend:

```bash
cd medicare/medicare
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

If your backend uses the standard start script:

```bash
npm start
```

---

## 3. Frontend Setup

Open a new terminal and return to the project root:

```bash
cd Medicare
```

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

# 🔒 Security

The application implements several standard web security concepts:

- JWT-based authentication
- Protected API routes
- Role-based authorization
- Password hashing
- Environment variables
- CORS configuration
- Server-side authorization

> **Never commit `.env` files or database credentials to GitHub.**

---

# 🌐 Live Demo

### 🚀 MediCare

**[Visit the Live Application →](https://medicare-coral-ten.vercel.app/)**

### 💻 Source Code

**[View Repository →](https://github.com/AyanGupta25/Medicare)**

---

# 📸 Screenshots

> Replace the placeholders below with screenshots from your actual application.

### 🏠 Homepage

![MediCare Homepage](screenshots/home.png)

### 🔐 Authentication

![MediCare Authentication](screenshots/login.png)

### 📅 Appointment Booking

![Appointment Booking](screenshots/appointment.png)

### 🛡️ Admin Dashboard

![Admin Dashboard](screenshots/admin.png)

### 👨‍⚕️ Doctor Management

![Doctor Management](screenshots/doctors.png)

---

# 💡 Engineering Highlights

This project demonstrates practical experience with:

- Full-stack MERN development
- REST API architecture
- Authentication and authorization
- Role-based access control
- MongoDB data modeling
- CRUD operations
- React component-based development
- Frontend-backend integration
- Cloud database integration
- Separate frontend/backend deployment
- Environment-based configuration

---

# 🧠 Key Learning Outcomes

Through MediCare, I worked with the complete lifecycle of a full-stack application:

```text
Requirements
     ↓
Frontend Development
     ↓
REST API Design
     ↓
Database Modeling
     ↓
Authentication
     ↓
Frontend ↔ Backend Integration
     ↓
Testing & Debugging
     ↓
Cloud Deployment
```

The project provided hands-on experience with both **application development and deployment**, rather than only frontend implementation.

---

# 🚧 Future Improvements

Potential improvements for future versions include:

- 📧 Email appointment notifications
- 🔔 Real-time notifications
- 💳 Online payment integration
- 🩺 Doctor availability scheduling
- 📄 Digital prescriptions
- 🗂️ Medical record management
- 📊 Advanced admin analytics
- 💬 Patient-doctor communication
- 📱 Further mobile optimization
- 🧪 Automated testing
- 🔄 CI/CD pipeline
- 📈 Application monitoring

---

# 🤝 Contributing

Contributions and suggestions are welcome.

### Create a feature branch

```bash
git checkout -b feature/your-feature
```

### Make your changes

```bash
git add .
```

### Commit

```bash
git commit -m "Add your feature"
```

### Push

```bash
git push origin feature/your-feature
```

Then open a Pull Request.

---

<p align="center">
  <strong>🏥 MediCare — Modern Hospital Management, Simplified.</strong>
</p>
