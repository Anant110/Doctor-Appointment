# 🩺 Doctor Appointment System

A secure and scalable web-based Doctor Appointment System built using the **MERN stack** (MongoDB, Express.js, React, Node.js).  
This project provides a platform where patients can explore doctor profiles and (in future stages) book appointments based on availability.

---

## 🔧 Tech Stack

- **Frontend**: React.js (Basic UI & API Integration)  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (NoSQL schema)  
- **Authentication**: JWT (JSON Web Tokens), Bcrypt (Password Hashing)

---

## ✅ Features

### 🔐 1. User Authentication (Completed)

- Patients and doctors can register and login securely.  
- Passwords are hashed using **bcrypt** before storing.  
- **JWT** is used for session management and route protection.

---

### 🧑‍⚕️ 2. Doctor Profile Management (Completed)

- Doctors have structured profiles with:
  - Name
  - Specialization
  - Experience
  - Rating
  - Availability

- Patients can:
  - View doctor details  
  - Filter doctors by specialization

- APIs follow **REST principles**.

---

### 📅 3. Appointment Booking (Planned)

#### Patients will be able to:
- Select a doctor, date, and time slot.
- Confirm appointment based on real-time availability.

#### Doctors will:
- Receive appointment requests.
- Accept or reject based on schedule.

#### System will:
- Store booking data in MongoDB (`Appointments` collection).
- Send email confirmations using **Nodemailer** *(planned)*.

---

## 🗄️ Database Design (MongoDB Schema)

### 🧑‍💼 Users Collection
- `name`, `email`, `password` (hashed), `role` (doctor/patient), `token`

### 👨‍⚕️ Doctors Collection
- `name`, `specialization`, `experience`, `rating`, `availability`

### 🗓️ Appointments Collection *(Planned)*
- `doctorId`, `patientId`, `date`, `time`, `status` (pending/confirmed)

---

## 🔒 Security Highlights

- All protected routes are secured via **JWT middleware**.
- Passwords are hashed using **bcrypt** before storing.
- Backend performs **validation** before processing any sensitive data.

---

## 🚀 Future Improvements

- ✅ Complete the **appointment booking module** with real-time checks.
- ✅ Implement **role-based dashboards** for doctors and patients.
- ✅ Add **appointment history tracking** and **status updates**.
- ✅ Integrate **email confirmations** via **Nodemailer**.
- ✅ Deploy the app using platforms like **Render** or **Vercel**.

---

🔗 **Live Demo**: [Click here to try the app](https://remarkable-alpaca-a5befc.netlify.app/)

---

## ✍️ Author

**Anant Pratap Singh**  
B.Tech | ABES Engineering College  
Focus Areas: **C++, DSA, OOPs, DBMS, MySQL, REACTJS, JAVASCRIPT**  
📧 Email: anant.abes459@gmail.com  

