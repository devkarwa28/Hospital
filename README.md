# Hospital Management System

**Note:** This project is made for only learning purposes and skill development.

## Project Overview

This is a web-based Hospital Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a platform for users to view hospital services, treatments, and doctors, as well as book appointments. It also includes an Admin Dashboard for managing hospital resources such as doctors, treatments, offers, and appointments.

## Features

### User Side (Frontend)
* **Home Page:** Overview of the hospital and excellence services.
* **About Us:** Information about the hospital's mission and vision.
* **Treatments:** View available medical treatments and procedures.
* **Doctors:** Browse the list of qualified doctors.
* **Offers:** Check current health packages and offers.
* **Book Appointment:** A form to schedule appointments with doctors.
* **Contact Us:** Contact information and inquiry form.

### Admin Side (Dashboard)
* **Dashboard:** Overview of system stats.
* **Manage Doctors:** Add, update, and view doctor profiles.
* **Manage Treatments:** Add and edit treatment details.
* **Manage Offers:** Create and update special offers.
* **Appointment Management:** View and manage patient appointments (e.g., update status).
* **Admin Authentication:** Secure access for administrators.

## Tech Stack

**Frontend:**
* React.js
* React Router DOM (for navigation)
* Axios (for API requests)
* CSS Modules (for styling)

**Backend:**
* Node.js
* Express.js
* MongoDB (Database)
* Mongoose (ODM)
* Cors (Cross-Origin Resource Sharing)

## Folder Structure

* `client/`: Contains the React frontend application.
    * `src/innerPages/`: Public-facing pages (Home, About, BookAppointment, etc.).
    * `src/Admin/`: Admin dashboard components (AddDoctors, ShowAppointments, etc.).
* `server/`: Contains the Node.js backend application.
    * `router/`: API route definitions (doctorRouting, appointmentRouting, etc.).
    * `models/`: Mongoose database models (doctorModel, appointmentModel, etc.).
    * `db/`: Database configuration files.

## Installation and Setup

Follow these steps to run the project locally.

### Prerequisites
* Node.js and npm installed.
* MongoDB installed locally or a MongoDB Atlas connection string.

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/hospital-management-system.git](https://github.com/your-username/hospital-management-system.git)
cd hospital-management-system
