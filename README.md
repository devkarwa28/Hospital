# Hospital Management System

> **Disclaimer:** This project is created for **learning purposes and skill development only**. It is not intended for real-world commercial use without further security and scalability enhancements.

## 📌 Project Overview

This is a full-stack **Hospital Management System** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It provides a user-friendly interface for patients to explore hospital services and book appointments, along with a comprehensive Admin Dashboard for hospital staff to manage doctors, treatments, and appointments.

## 🚀 Features

### 🏥 User Interface (Frontend)
* **Home Page:** Overview of hospital excellence and key services.
* **Find a Doctor:** Browse profiles of qualified doctors by specialization.
* **Treatments:** View detailed information about medical treatments available.
* **Online Appointment Booking:** Easy-to-use form for scheduling appointments.
* **Offers & Packages:** View current health packages and offers.
* **Contact & Inquiry:** Integrated contact form for general inquiries.

### 🛠 Admin Dashboard (Backend Management)
* **Admin Authentication:** Secure login and registration for administrators.
* **Dashboard Overview:** Quick stats on system activity.
* **Doctor Management:** Add, update, view, or remove doctor profiles.
* **Appointment Management:** View patient bookings and manage their status.
* **Treatment Management:** CRUD operations for medical treatments.
* **Offer Management:** Update and manage hospital offers.

## 💻 Tech Stack

### Frontend (Client)
* **React.js:** Component-based UI library.
* **React Router DOM:** For seamless single-page navigation.
* **Axios:** For handling HTTP requests to the backend.
* **Bootstrap / CSS Modules:** For responsive styling.

### Backend (Server)
* **Node.js:** JavaScript runtime environment.
* **Express.js:** Web framework for handling API routes.
* **MongoDB:** NoSQL database for storing data.
* **Mongoose:** ODM library for MongoDB interaction.
* **Cors & Cookie-Parser:** Middleware for handling cross-origin requests and cookies.

## 📂 Project Structure

```text
hospital-management-system/
├── client/                 # React Frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── Admin/          # Admin dashboard components
│   │   ├── Footer/         # Footer component
│   │   ├── Header/         # Navigation bar
│   │   ├── innerPages/     # Public pages (Home, About, Doctors, etc.)
│   │   ├── App.js          # Main App component
│   │   └── Routing.js      # Route definitions
│   └── package.json        # Frontend dependencies
│
├── server/                 # Node.js Backend
│   ├── db/                 # Database configuration
│   ├── models/             # Mongoose schemas (Doctor, Appointment, etc.)
│   ├── router/             # API routes
│   ├── app.js              # Server entry point
│   └── package.json        # Backend dependencies
└── README.md               # Project documentation
