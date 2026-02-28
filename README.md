# 🎫 Sydney Event Platform

A full-stack MERN-based event aggregation platform that automatically scrapes Sydney (Australia) events from multiple public sources, stores them in a database, displays them in a modern UI, and provides an admin dashboard with Google OAuth authentication.

---

## 🚀 Features

### 🔄 Automated Event Scraping
- Scrapes events from multiple public event websites
- Stores:
  - Title
  - Date & Time
  - Venue Name & Address
  - City
  - Description
  - Category
  - Image URL
  - Source Website
  - Original Event URL
  - Last Scraped Time
- Automatically detects:
  - 🟢 New events
  - 🟡 Updated events
  - 🔴 Inactive events (expired/removed)
- Scheduled scraping using `setInterval()`

---

### 🌐 Public Event Website
- Minimal, modern UI
- Event cards with:
  - Image
  - Title
  - Date/Time
  - Venue
  - Description
  - Source
  - Status Badge
  - **GET TICKETS CTA**

---

### 📩 Email Capture Workflow
When user clicks **GET TICKETS**:
1. Modal asks for email
2. Consent checkbox required
3. Email + consent + event reference saved in DB
4. User redirected to original event URL

---

### 🔐 Google OAuth Authentication
- Google Sign-In using OAuth 2.0
- JWT token-based authentication
- Only logged-in users can access dashboard

---

### 🧑‍💼 Admin Dashboard
Includes:

#### 🔎 Filters
- City filter (default: Sydney, scalable)
- Keyword search (title / venue / description)
- Date range filter

#### 📊 Views
- Table view of events
- Clickable row → preview panel

#### ⚙️ Actions
- Import to Platform button
- Stores:
  - importedAt
  - importedBy
  - status change

#### 🏷 Status Tags
- `new`
- `updated`
- `inactive`
- `imported`

---

## 🏗 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router
- Google OAuth
- Modern CSS (custom UI)

### Backend
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Axios + Cheerio (scraping)

---

## 📂 Project Structure

```

event-platform/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── scraper/
│   ├── services/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx

````

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/event-platform.git
cd event-platform
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
DB_NAME=event_platform
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_HOST=localhost
JWT_SECRET=your_secret
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔄 Automatic Re-Scrape

The system runs scheduled scraping using:

```js
setInterval(() => {
  scrapeEvents();
}, 15 * 60 * 1000);
```

Detects:

* New events
* Updated events
* Inactive events

---

## 🧪 Demonstrated Workflow

✔ Scrape → Store → Display
✔ Email Capture + Consent
✔ OAuth Login
✔ Protected Dashboard
✔ Filters + Preview
✔ Import → Status Update
✔ Scheduled Auto Re-Scrape

---

## 📌 Future Improvements

* Real production scraping
* Pagination
* Role-based admin access
* Deployment (Docker / Cloud)

---

## 👨‍💻 Author

Your Name
Assignment Submission – MERN Full Stack

```

---

# ✅ .gitignore (Root Level)

Create this at root of project:

```

# Node modules

node_modules/

# Environment files

.env
backend/.env
frontend/.env

# Logs

logs
*.log
npm-debug.log*

# OS files

.DS_Store
Thumbs.db

# Vite

frontend/node_modules/.vite/

# Build

dist/
build/

# Coverage

coverage/

# IDE

.vscode/
.idea/

# Mac

.DS_Store

# Windows

desktop.ini

````

---

# ⚠️ Important Before Pushing to GitHub

### 1️⃣ Make sure `.env` is NOT committed
Run:

```bash
git status
````

If `.env` shows → remove:

```bash
git rm --cached backend/.env
```

---

### 2️⃣ Make Clean Commits

```bash
git add .
git commit -m "Full MERN event platform with scraping, OAuth, dashboard"
git push origin main
```

---

# 🏆 Submission Status

You now have:

✔ Multi-source scraping
✔ Auto update detection
✔ Status tagging
✔ Email capture
✔ OAuth authentication
✔ Protected dashboard
✔ Import workflow
✔ Scheduled automation
✔ Modern UI

This is a **complete end-to-end MERN assignment**.

---