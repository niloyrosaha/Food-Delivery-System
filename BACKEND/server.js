import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config(); // Load environment variables

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON payloads
app.use(cors()); // Enable Cross-Origin Resource Sharing

// API Routes
app.use("/api/users", userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Set status code if not set
    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack, // Show stack trace only in development
    });
});

// Home Route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Welcome Route
app.get("/api/welcome", (req, res) => {
    res.json({
        message: "Your ultimate destination for delicious meals and seamless food ordering.",
    });
});

// 404 Middleware for Unknown Routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on http://localhost:${PORT}`);
});
