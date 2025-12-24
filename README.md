# 📓 Sync-Log | Collaborative Development Journal

[![MERN](https://img.shields.io/badge/Stack-MERN-10b981?style=for-the-badge)](#)
[![Backend](https://img.shields.io/badge/API-REST-orange?style=for-the-badge)](#)
[![State](https://img.shields.io/badge/State-Redux-764abc?style=for-the-badge&logo=redux)](#)

Sync-Log is a high-performance MERN application engineered for asynchronous team updates and internal development logging. It features a robust Redux-managed state, a Material UI frontend, and a centralized MongoDB backend for the persistent archival of mission-critical development entries.

Rather than a social feed, Sync-Log emphasizes **data integrity** and **weighted prioritization**, allowing teams to synchronize progress through a structured, multi-user environment.

---

## 💎 Product Philosophy

### The Unified Ledger UI
Sync-Log utilizes a **Card-Grid architecture** designed to maximize information density. By implementing priority-based labels (High/Normal/Low) and high-contrast Material Design patterns, the system ensures that urgent logs are visually prioritized for the end-user.

The intent is deliberate:
Provide a lightweight, high-integrity alternative to heavy project management tools, focusing on speed and atomic updates.

---

## 🛠️ Engineering Highlights

- **State Orchestration:** Implemented a centralized **Redux Store** to manage application state across various components, ensuring predictable data flow and simplifying the "Single Source of Truth."
- **Mongoose Data Validation:** Enforced strict data integrity via **Enums** in the schema, specifically for the "Priority" weighting system, ensuring backend stability.
- **RESTful API Design:** Modular Express.js controllers optimized for high-frequency CRUD operations and efficient response cycles.
- **Image Persistence:** Integrated **Base64 encoding** for image storage, enabling the database to store and serve digital assets without external storage dependencies.

---

## 🧱 Technical Stack

- **Frontend:** React.js (Functional Components & Hooks)
- **State Management:** Redux + Redux-Thunk
- **Backend:** Node.js & Express.js
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Styling:** Material UI (MUI) for professional design systems

---

## 📂 Project Architecture

Sync-Log-v1/
├── server/                 # API Service Logic
│   ├── controllers/        # Logical controllers for Log entries
│   ├── models/             # Mongoose Schemas (LogEntry.js)
│   ├── routes/             # RESTful Endpoint definitions
│   └── index.js            # Server entry point
│
└── client/                 # Interface Service Logic
    ├── src/
    │   ├── actions/        # Redux action creators
    │   ├── api/            # Axios service layer
    │   ├── components/     # Atomic UI components
    │   ├── reducers/       # Global state logic
    │   └── App.js          # Root application component

---

## 🚀 Quick Start

1. **Backend Setup**
   cd server && npm install
   # Add CONNECTION_URL to your .env
   npm start

2. **Frontend Setup**
   cd client && npm install
   npm start

---

## 📝 Author

Designed and engineered by **Stuti**. Focused on building scalable full-stack interactions and high-performance React architectures.