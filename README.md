<div align="center">

# 🏥 MediCare

### Full-Stack Hospital Management System

Book doctors, manage appointments, collect reviews, and run the hospital from a dedicated admin panel.

**React · Vite · Tailwind CSS · Node.js · Express · MongoDB · JWT**

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Default Accounts](#-default-accounts)
- [API Reference](#-api-reference)
- [Data Models](#-data-models)
- [Current Status & Roadmap](#-current-status--roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 📌 Overview

**MediCare** is a MERN-stack hospital management platform made up of **three independent apps**:

| App | Purpose | Location | Default Port |
|---|---|---|---|
| **Patient Portal** | Public site where patients browse doctors, book appointments, and leave reviews | [`/frontend`](./frontend) | `5173` |
| **Admin Panel** | Dashboard for administrators to manage doctors, appointments, and services | [`/medicare/admin`](./medicare/admin) | `5174` |
| **REST API** | Express + MongoDB backend with JWT auth and role-based access control | [`/medicare/backend`](./medicare/backend) | `5000` |

Traditional hospital workflows are often spread across disconnected tools. MediCare brings patients, doctors, appointments, and reviews into one system with a clean separation between the public experience and the administrative back office.

---

## ✨ Features

### 🧑‍🤝‍🧑 Patient Portal
- Register and log in (JWT-based session)
- Browse and view detailed doctor profiles (specialization, qualifications, experience, time slots, ratings)
- Book appointments by choosing a date and time slot
- View personal appointments and manage account details from **My Account**
- Submit star ratings and written reviews for doctors
- Contact page and responsive UI built with Tailwind CSS

### 🛠️ Admin Panel
- Secure admin login with a protected dashboard
- Dashboard with analytics charts (Recharts)
- Add, list, update, and delete doctors
- View and manage all appointments and update their status (`pending` / `approved` / `cancelled`)
- Service management screens (see [Current Status](#-current-status--roadmap))

### 🔐 Backend & Security
- JWT authentication with configurable expiry
- Password hashing with `bcryptjs`
- `protect` middleware for authenticated routes and `restrict(...roles)` for role-based authorization
- Roles: `patient`, `doctor`, `admin`
- Doctor ratings are recalculated automatically whenever a review is saved
- Automatic fallback to an in-memory MongoDB instance if the configured database is unreachable (handy for quick local demos)
- Admin and test patient accounts seeded on first start

---

## 🧭 Architecture

```text
┌─────────────────┐        ┌─────────────────┐
│  Patient Portal │        │   Admin Panel   │
│  React + Vite   │        │  React + Vite   │
│   (port 5173)   │        │   (port 5174)   │
└────────┬────────┘        └────────┬────────┘
         │      HTTPS / JSON (Axios + Bearer JWT)
         └────────────┬─────────────┘
                      ▼
          ┌───────────────────────┐
          │  Express REST API     │
          │  /api/auth            │
          │  /api/doctors         │
          │  /api/users           │
          │  /api/appointments    │
          │  /api/doctors/:id/    │
          │        reviews        │
          └───────────┬───────────┘
                      ▼
          ┌───────────────────────┐
          │   MongoDB (Mongoose)  │
          │ Users · Doctors ·     │
          │ Appointments · Reviews│
          └───────────────────────┘
```

**Booking flow:** Patient logs in → picks a doctor → chooses date and slot → appointment is created as `pending` → admin reviews it and updates the status.

---

## 🧰 Tech Stack

| Layer | Technologies |
|---|---|
| **Patient Portal** | React 19, Vite, Tailwind CSS 4, React Router 7, Zustand, React Hook Form, React Query, Axios, React Toastify, React Icons |
| **Admin Panel** | React 18, Vite 5, Tailwind CSS 4, React Router 6, Recharts, Axios, React Toastify, React Icons |
| **Backend** | Node.js (ES Modules), Express 4, Mongoose 8, JSON Web Tokens, bcryptjs, CORS, dotenv, express-async-handler |
| **Database** | MongoDB (Atlas or local), `mongodb-memory-server` fallback |
| **Tooling** | ESLint, Oxlint, Nodemon |

---

## 📂 Project Structure

```text
Medicare/
├── frontend/                     # Patient portal
│   └── src/
│       ├── components/shared/    # Navbar, Footer, ProtectedRoute
│       ├── pages/                # Home, Doctors, DoctorDetails, Login,
│       │                         # Register, MyAccount, Contact
│       ├── store/authStore.js    # Zustand auth state
│       └── utils/apiConfig.js    # Axios instance (API base URL)
│
└── medicare/
    ├── admin/                    # Admin panel
    │   └── src/
    │       ├── components/Layout.jsx
    │       ├── pages/            # Dashboard, AddDoctor, ListDoctors,
    │       │                     # Appointments, Add/ListServices, ...
    │       └── utils/apiConfig.js
    │
    └── backend/                  # REST API
        └── src/
            ├── config/db.js
            ├── controllers/      # auth, user, doctor, appointment, review
            ├── middleware/       # authMiddleware (protect, restrict)
            ├── models/           # User, Doctor, Appointment, Review
            ├── routes/
            └── server.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm
- A MongoDB connection string (MongoDB Atlas or a local instance). It is optional for a quick demo because the API falls back to an in-memory database.

### 1. Clone the repository

```bash
git clone https://github.com/AyanGupta25/Medicare.git
cd Medicare
```

### 2. Start the backend

```bash
cd medicare/backend
npm install
```

Create a `.env` file in `medicare/backend` (see [Environment Variables](#-environment-variables)), then run:

```bash
npm run dev     # development with nodemon
# or
npm start       # production
```

The API runs at `http://localhost:5000`. Visiting it should return `{"message": "Medicare API is running..."}`.

### 3. Start the patient portal

```bash
cd frontend
npm install
npm run dev
```

### 4. Start the admin panel

```bash
cd medicare/admin
npm install
npm run dev     # runs on port 5174
```

### 5. Point the frontends at your local API

Both frontends currently use a hosted backend URL by default. To use your local server, edit `BASE_URL` in:

- `frontend/src/utils/apiConfig.js`
- `medicare/admin/src/utils/apiConfig.js`

```js
const BASE_URL = "http://localhost:5000/api";
```

### Useful scripts

| App | Command | Description |
|---|---|---|
| Frontend / Admin | `npm run dev` | Start the Vite dev server |
| Frontend / Admin | `npm run build` | Create a production build |
| Frontend / Admin | `npm run preview` | Preview the production build |
| Frontend | `npm run lint` | Run ESLint |
| Backend | `npm run dev` | Start with nodemon |
| Backend | `npm start` | Start with Node |

---

## 🔑 Environment Variables

Create `medicare/backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/medicare
JWT_SECRET=replace-with-a-long-random-string
JWT_EXPIRE=7d
```

| Variable | Required | Description |
|---|---|---|
| `PORT` | No | API port (defaults to `5000`) |
| `MONGODB_URI` | Recommended | MongoDB connection string. If missing or unreachable, the API uses an in-memory database and data is lost on restart |
| `JWT_SECRET` | **Yes** | Secret used to sign tokens |
| `JWT_EXPIRE` | **Yes** | Token lifetime, e.g. `7d` |

> `.env` is already listed in `.gitignore`. Never commit real credentials.

---

## 👤 Default Accounts

On startup the server seeds two accounts if they don't exist, so you can try the app right away:

| Role | Email | Password |
|---|---|---|
| Admin | `admin@medicare.com` | `admin123` |
| Patient | `patient@medicare.com` | `patient123` |

> ⚠️ **These are for local development only.** Remove or change the seed logic in `medicare/backend/src/server.js` before deploying to production.

---

## 📡 API Reference

Base URL: `http://localhost:5000/api`  
Protected routes require the header `Authorization: Bearer <token>`.

### Auth

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/auth/register` | Public | Register a patient or doctor (`role` in body) |
| `POST` | `/auth/login` | Public | Log in and receive a JWT |

### Doctors

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/doctors` | Public | List all doctors |
| `GET` | `/doctors/:id` | Public | Get a single doctor |
| `GET` | `/doctors/profile/me` | Doctor | Get the logged-in doctor's profile |
| `PUT` | `/doctors/:id` | Doctor, Admin | Update a doctor |
| `DELETE` | `/doctors/:id` | Admin | Delete a doctor |

### Users

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/users` | Admin | List all users |
| `GET` | `/users/profile/me` | Authenticated | Get own profile |
| `GET` | `/users/:id` | Authenticated | Get a single user |
| `PUT` | `/users/:id` | Authenticated | Update a user |
| `DELETE` | `/users/:id` | Admin | Delete a user |

### Appointments

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/appointments` | Authenticated | Book an appointment |
| `GET` | `/appointments` | Authenticated | List appointments |
| `GET` | `/appointments/my-appointments` | Authenticated | List the current user's appointments |
| `GET` | `/appointments/:id` | Authenticated | Get one appointment |
| `PUT` | `/appointments/:id` | Authenticated | Update an appointment (e.g. status) |
| `DELETE` | `/appointments/:id` | Authenticated | Delete an appointment |

### Reviews

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/doctors/:doctorId/reviews` | Public | List reviews for a doctor |
| `POST` | `/doctors/:doctorId/reviews` | Patient | Add a review |
| `DELETE` | `/doctors/:doctorId/reviews/:id` | Authenticated | Delete a review |

### Example

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"patient@medicare.com","password":"patient123"}'
```

```json
{
  "success": true,
  "message": "Login successful",
  "token": "<jwt>",
  "data": { "_id": "...", "name": "Test Patient", "role": "patient" }
}
```

---

## 🗄️ Data Models

| Model | Key fields |
|---|---|
| **User** | `name`, `email`, `password` (hashed), `phone`, `photo`, `role` (`patient` \| `admin`), `gender`, `bloodType`, `appointments[]` |
| **Doctor** | `name`, `email`, `password`, `specialization`, `ticketPrice`, `qualifications[]`, `experiences[]`, `bio`, `about`, `timeSlots[]`, `averageRating`, `totalRating`, `isApproved`, `reviews[]`, `appointments[]` |
| **Appointment** | `user`, `doctor`, `doctorName`, `doctorSpecialization`, `appointmentDate`, `timeSlot`, `ticketPrice`, `status` (`pending` \| `approved` \| `cancelled`), `isPaid`, `notes` |
| **Review** | `doctor`, `user`, `reviewText`, `rating` (0–5) |

---

## 🗺️ Current Status & Roadmap

An honest snapshot of where the project stands:

**Working end to end**
- [x] Registration, login, JWT auth, role-based access
- [x] Doctor CRUD and public doctor browsing
- [x] Appointment booking and status management
- [x] Doctor reviews with automatic rating aggregation
- [x] Admin dashboard and doctor/appointment management

**In progress / planned**
- [ ] **Services module:** admin service pages exist as UI, but services are not yet persisted to the backend
- [ ] **Online payments:** the `isPaid` field and a Razorpay dependency are in place, but the payment flow is not implemented
- [ ] Image uploads for doctor photos (Cloudinary and Multer are installed but not yet wired up)
- [ ] Environment-based API URL (e.g. `VITE_API_URL`) instead of editing `apiConfig.js`
- [ ] Email or SMS appointment notifications
- [ ] Automated tests and CI

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**Ayan Gupta**  
GitHub: [@AyanGupta25](https://github.com/AyanGupta25)

If you found this project useful, consider giving it a ⭐
