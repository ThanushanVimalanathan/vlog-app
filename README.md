# QuickFix 🔧

A full-stack **home services job request platform** built with Next.js, Express.js, and MongoDB. QuickFix allows homeowners to submit job requests for services like plumbing, electrical, painting, and joinery — and lets staff manage those requests through a dedicated dashboard.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Backend Setup](#2-backend-setup)
  - [3. Frontend Setup](#3-frontend-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Pages & Routes](#pages--routes)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

QuickFix connects homeowners with skilled tradespeople by providing:

- A **public landing page** showcasing available home services (plumbing, electrical, painting, joinery)
- A **job request form** where users can submit detailed service requests after logging in
- A **management dashboard** for viewing, updating, and deleting job requests

---

## Features

- 🔐 **User Authentication** — Register and log in with JWT-based authentication and bcrypt password hashing
- 📋 **Job Request Submission** — Submit job requests with title, description, category, location, and contact details
- 📊 **Job Dashboard** — View all submitted jobs in a sortable table with real-time status updates
- 🔄 **Status Management** — Update job status between `Open`, `In Progress`, and `Closed`
- 🗑️ **Delete Jobs** — Remove completed or cancelled job requests
- 🎨 **Category Filtering** — Filter service listings by category on the home page
- 📱 **Responsive Design** — Mobile-friendly UI built with Tailwind CSS

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 16, React 19, Tailwind CSS 4 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (via Mongoose) |
| **Authentication** | JSON Web Tokens (JWT), bcrypt |
| **HTTP Client** | Axios |
| **Notifications** | React Toastify |

---

## Project Structure

```
Assignment-Intern/
├── back-end/
│   ├── config/
│   │   └── mongodb.js          # MongoDB connection
│   ├── controllers/
│   │   ├── jobController.js    # Job CRUD logic
│   │   └── userController.js   # Auth logic (login/register)
│   ├── middleware/
│   │   └── adminAuth.js        # JWT auth middleware
│   ├── models/
│   │   ├── jobModel.js         # Job schema
│   │   └── userModel.js        # User schema
│   ├── routes/
│   │   ├── jobRoute.js         # Job API routes
│   │   └── userRoute.js        # User API routes
│   └── server.js               # Express app entry point
│
└── front-end/
    ├── app/
    │   ├── page.js             # Home page
    │   ├── layout.js           # Root layout
    │   ├── globals.css         # Global styles
    │   ├── Login/page.jsx      # Login / Sign Up page
    │   ├── Job/page.jsx        # Job request form
    │   └── Booked/page.jsx     # Job management dashboard
    ├── Assets/
    │   └── assets.js           # Centralized asset exports
    ├── Components/
    │   ├── Header.jsx          # Navigation header
    │   ├── Footer.jsx          # Footer
    │   ├── BlogList.jsx        # Service listing grid
    │   └── BlogItem.jsx        # Individual service card
    └── package.json
```

---

## Prerequisites

Make sure you have the following installed before proceeding:

- **Node.js** v18 or higher — [Download](https://nodejs.org/)
- **npm** v9 or higher (comes with Node.js)
- **MongoDB** — either a local instance or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ThanushanVimalanathan/Assignment-Intern.git
cd Assignment-Intern
```

---

### 2. Backend Setup

```bash
# Navigate to the backend folder
cd back-end

# Install dependencies
npm install
```

Create a `.env` file inside the `back-end/` folder (see [Environment Variables](#environment-variables) below), then return to the root:

```bash
cd ..
```

---

### 3. Frontend Setup

```bash
# Navigate to the frontend folder
cd front-end

# Install dependencies
npm install
```

If your backend is not running on `http://localhost:4000`, create a `.env.local` file in `front-end/` and set:

```env
BACKEND_URL=http://localhost:4000
```

---

## Environment Variables

### Backend — `back-end/.env`

Create this file with the following variables:

```env
# MongoDB connection string (replace with your URI)
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net

# Port for the Express server
PORT=4000

# Secret key for signing JWT tokens (use a long random string)
JWT_SECRET=your_super_secret_jwt_key

# Admin credentials (used for admin auth middleware)
ADMIN_EMAIL=admin@quickfix.com
ADMIN_PASSWORD=adminpassword123
```

> ⚠️ **Never commit your `.env` file to version control.** It is already listed in `.gitignore`.

---

## Running the Application

You will need **two terminal windows** — one for the backend, one for the frontend.

### Terminal 1 — Start the Backend

```bash
cd back-end
npm run server
```

You should see:
```
Server is running on port 4000
MongoDB connected successfully
```

### Terminal 2 — Start the Frontend

```bash
cd front-end
npm run dev
```

You should see:
```
▲ Next.js 16.x.x
- Local: http://localhost:3000
```

Open your browser and visit **http://localhost:3000**

---

## API Endpoints

### Base URL: `http://localhost:4000`

#### User Routes — `/api/user`

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/api/user/register` | Register a new user | `{ name, email, password }` |
| `POST` | `/api/user/login` | Log in and receive a JWT token | `{ email, password }` |

#### Job Routes — `/api/job`

| Method | Endpoint | Description | Body / Params |
|--------|----------|-------------|---------------|
| `POST` | `/api/job/add` | Submit a new job request | `{ title, description, category, location, contactName, contactEmail }` |
| `GET` | `/api/job/list` | Get all job requests | — |
| `PUT` | `/api/job/modify` | Update a job (e.g. status) | `{ jobId, ...updatedFields }` |
| `DELETE` | `/api/job/remove` | Delete a job request | `{ jobId }` |

#### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Confirm the API is running |

---

## Pages & Routes

| URL | Page | Description |
|-----|------|-------------|
| `/` | Home | Landing page with service listings and category filter |
| `/Login` | Login / Sign Up | Authentication page — toggle between login and registration |
| `/Job` | Job Request Form | Submit a new home service request (requires login) |
| `/Booked` | Job Dashboard | View, update status, and delete all job requests |

---

## Contributing

Contributions, issues, and feedback are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## License

This project was created as part of an internship assignment. All rights reserved © QuickFix.
