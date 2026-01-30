# 🏥 Hospital Management System (MERN Stack)

> ⚠️ **Disclaimer**  
> This project is created for **learning and skill-development purposes only**.  
> It is **not intended for real-world production use** without additional security, validation, and scalability improvements.

---

## 📌 Project Overview

The **Hospital Management System** is a full-stack web application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It provides a user-friendly interface for patients and a powerful **Admin Dashboard** for managing doctors, appointments, treatments, and offers.

This project demonstrates:
- Real-world MERN architecture
- Cloud image uploads using **Cloudinary**
- Secure environment variable handling
- Full CRUD operations
- Live deployment experience

---

## 🌐 Live Project Links

- **Frontend (Vercel)**  
  👉 https://hospital-chi-bay.vercel.app

- **Admin Dashboard**  
  👉 https://hospital-chi-bay.vercel.app/admindashboard

- **Backend API (Render)**  
  👉 https://hospital-l89k.onrender.com

---

## 🚀 Features

### 🏥 User Interface (Frontend)
- Home page showcasing hospital services
- Browse doctors by specialization
- View available treatments and medical services
- Book appointments online
- View offers and health packages
- Contact form for inquiries

### 🛠️ Admin Dashboard
- Add doctors with profile image upload (Cloudinary)
- View and manage doctor records
- Manage appointments
- Manage treatments and offers
- Secure environment-based configuration

---

## 💻 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap 5
- CSS Modules

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- Cloudinary
- CORS
- dotenv

### Deployment & Cloud
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas
- **Image Storage:** Cloudinary

---

## 📸 Image Upload Architecture (Cloudinary)

```text
React Form (FormData)
        ↓
Axios (multipart/form-data)
        ↓
Multer Middleware
        ↓
Cloudinary
        ↓
MongoDB (Image URL + public_id)
```


## 📂 Project Structure
```text
hospital-management-system/
├── client/ # React Frontend
│ ├── public/ # Static assets
│ └── src/
│ ├── Admin/ # Admin dashboard components
│ ├── Header/ # Navigation bar
│ ├── Footer/ # Footer component
│ ├── innerPages/ # Public pages (Home, Doctors, Treatments)
│ ├── App.js # Main React app
│ └── Routing.js # Route definitions
│
├── server/ # Node.js Backend
│ ├── config/ # Cloudinary & config files
│ ├── db/ # MongoDB connection
│ ├── models/ # Mongoose schemas
│ ├── router/ # Express API routes
│ ├── Middleware/ # Custom middleware
│ ├── app.js # Server entry point
│ └── .env # Environment variables (ignored)
│
└── README.md # Project documentation
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server/` directory  
(**Do NOT commit this file**)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```
---
## ▶️ Run Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/devkarwa28/Hospital.git
cd Hospital
```
### 2️⃣ Start backend server
```bash
cd server
npm install
npm start
```
### 3️⃣ Start frontend
```bash
cd client
npm install
npm start
```
---
## 🔒 Security Practices

- .env file excluded using .gitignore

- Secrets stored using environment variables

- Cloudinary API keys never exposed on frontend

- Production secrets managed via hosting platforms

## 🚀 Deployment

- Frontend: Vercel

- Backend: Render

- Database: MongoDB Atlas

- Image Storage: Cloudinary CDN

## 📌 Future Enhancements

- JWT authentication (Admin login)

- Role-based access control

- Edit doctor profile with image replacement

- Delete doctor with Cloudinary image cleanup

- Pagination & search filters

- Dashboard analytics

## 👨‍💻 Author

**Dev Karwa**
Full-Stack Web Developer (MERN Stack)

- GitHub: https://github.com/devkarwa28

- Project: Hospital Management System

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.
