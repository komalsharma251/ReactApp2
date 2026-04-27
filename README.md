# 🌐 Komal Sharma – Portfolio Admin (Next.js)

A professional full-stack portfolio website built using **Next.js (TypeScript)** for the frontend and **PHP + MySQL** for backend integration.

This project showcases my skills, projects, and experience while also including an **admin dashboard** and a **working contact form connected to a database**.

---

## 🚀 Features

### 🏠 Home Page
- Professional hero section introducing me
- Skills snapshot and featured projects
- Resume download button

### 👩‍💻 About Page
- Detailed professional summary
- Technical skills and education
- Profile image with contact card

### 📁 Projects Page
- Real project showcase with:
  - Screenshots
  - GitHub links
  - Tech stack badges
- Multiple full-stack and frontend projects

### 📬 Contact Page
- Functional contact form
- Integrated with **PHP + MySQL backend**
- Stores messages in database
- Loading spinner and success/error alerts

### 🔐 Admin Section
- Login page (demo)
- Dashboard with:
  - Project stats
  - Skills overview
  - Quick actions

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- React
- Bootstrap 5

### Backend
- PHP (API endpoints)
- MySQL (Database)
- XAMPP (Local server)

### Tools
- Git & GitHub
- VS Code

---

## 📸 Screenshots

### 🏠 Home Page
![Home](public/screenshots/dashboard1.png)

### 👩‍💻 About Page
![About](public/screenshots/about1.png)

### 📁 Projects Page
![Projects](public/screenshots/projects.png)

### 📬 Contact Page
![Contact](public/screenshots/contact1.png)

### 🔐 Dashboard
![Dashboard](public/screenshots/loginDashboard.png)

---

## 📂 Project Structure

src/
app/
page.tsx
about/page.tsx
projects/page.tsx
contact/page.tsx
login/page.tsx
dashboard/page.tsx
components/
Navbar.tsx
Footer.tsx
ProjectCard.tsx
data/
projects.ts

public/
projects/
screenshots/
resume.pdf

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/komalsharma251/your-repo-name
cd your-repo-name
2️⃣ Install Dependencies
npm install
3️⃣ Run Next.js App
npm run dev

Open:

http://localhost:3000
🗄 Backend Setup (PHP + MySQL)
1️⃣ Start XAMPP

Start:

Apache
MySQL
2️⃣ Create Database
CREATE DATABASE portfolio_db;
3️⃣ Create Table
CREATE TABLE portfolio_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
4️⃣ Place API in htdocs
htdocs/API_PORTFOLIO/contact/create.php
5️⃣ API Endpoint Used
http://localhost/API_PORTFOLIO/contact/create.php
🌍 Live Demo

👉 Add your deployed link here:

https://your-live-portfolio-link.com
📎 GitHub Projects Included
Jewellery Inventory Manager (Angular)
Technical Support Management Project (PHP, HTML, CSS)
Shahizewer Jewellery Website (React,PHP + MySQL)
Personal Portfolio Website (Next.js)
🎯 Learning Outcomes
Built a multi-page Next.js application
Used reusable components (Navbar, Footer)
Implemented full-stack integration (Next.js + PHP + MySQL)
Designed responsive UI using Bootstrap
Managed project structure professionally
Integrated REST APIs and handled form submission
👩‍💻 Author

Komal Sharma

📧 komalsharma251@gmail.com

📍 Brampton, Ontario


