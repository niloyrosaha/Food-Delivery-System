# 🍕 Food-Delivery-System 🚀

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-%5E19.0.0-blue)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/database-MongoDB-informational)](https://www.mongodb.com/)

**Food-Delivery-System** is a high-performance, full-stack food and grocery delivery ecosystem. Built with the **MERN** stack, it provides a seamless experience for users to discover restaurants, order personalised meals with count of total calories, shop for groceries, and track deliveries in real-time.

---

## 🌟 Key Features

### 👤 User Experience
- **Smart Authentication**: Secure JWT-based signup/login with encrypted password hashing (Bcrypt).
- **Food Delivery**: Explore diverse cuisines (American, Chinese, Italian, Pan-Asian) and top restaurants like KFC, Pizza Hut, and McDonald's and order as per calories you want to have.
- **Grocery Hub**: Integrated grocery shopping for daily essentials.
- **Real-time Order Tracking**: Dynamic map integration using **Leaflet** to visualize delivery progress.
- **Unified Cart System**: Manage food and grocery items with automatic price calculations.
- **Interactive Ratings**: Review system for dishes and restaurants.
- **Profile Management**: Update user details and view order history.

### 🛠️ Admin & Infrastructure
- **Admin Dashboard**: Comprehensive management of restaurants, menus, and users.
- **Advanced Search**: Robust restaurant and cuisine filtering.
- **Mock Payment Gateway**: Seamless checkout experience (expandable to Stripe/SSLCommerz).
- **Automated Seeders**: Pre-populated data for restaurants, premium foods, and groceries for rapid development.

---

## 🏗️ Technical Architecture

### Tech Stack
| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, React Router 7, Axios, Leaflet, CSS3 (Modular) |
| **Backend** | Node.js, Express.js, JWT, Bcrypt, Express Async Handler |
| **Database** | MongoDB (via Mongoose ODM) |
| **Dev Tools** | Nodemon, ESLint, Dotenv |

### Project Structure
```text
Food-Delivery-System/
├── BACKEND/                # Node/Express Server
│   ├── config/            # DB Configuration
│   ├── controllers/       # Business Logic
│   ├── models/            # Mongoose Schemas
│   ├── routes/            # API Endpoints
│   ├── server.js          # Entry Point
│   └── *Seeder.js         # Database Population Scripts
└── FRONTEND/               # React Application
    ├── src/
    │   ├── pages/         # View Components
    │   ├── assets/        # Static Resources
    │   └── App.jsx        # Routing Logic
    └── vite.config.js     # Build Tooling
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/niloyrosaha/Food-Delivery-System.git
   cd Food-Delivery-System
   ```

2. **Backend Setup**
   ```bash
   cd BACKEND
   npm install
   ```
   Create a `.env` file in the `BACKEND` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key
   ```
   *Optional: Seed the database*
   ```bash
   node seeder.js
   ```

3. **Frontend Setup**
   ```bash
   cd ../FRONTEND
   npm install
   ```

---

## 🚥 Running the Application

### Start Backend
```bash
cd BACKEND
npm run dev
```

### Start Frontend
```bash
cd FRONTEND
npm run dev
```
The app will be available at `http://localhost:5173` (Vite default).

---

## 🔌 API Reference

### Auth
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/signup` | Create a new user account |
| `POST` | `/api/auth/login` | Authenticate user & return token |

### Core
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/food` | Fetch all food items |
| `GET` | `/api/restaurants` | List available restaurants |
| `GET` | `/api/groceries` | List grocery products |
| `GET` | `/api/profile` | Retrieve user profile data |

---

## 📸 Preview
*(Add your screenshots here)*
> **Tip:** You can use tools like `Lighthouse` to check performance scores.

---

## 🛡️ License
Distributed under the MIT License. See `LICENSE` for more information.

---

## 🤝 Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact
**Niloy Saha** - [GitHub](https://github.com/niloyrosaha)

Project Link: [https://github.com/niloyrosaha/Food-Delivery-System](https://github.com/niloyrosaha/Food-Delivery-System)
