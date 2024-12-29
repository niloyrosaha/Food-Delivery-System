import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRoutes from "./routes/foodRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
<<<<<<< HEAD
import locationRoutes from "./routes/locationRoutes.js";
=======
import groceryRoutes from "./routes/GroceryRoutes.js";

>>>>>>> 1bb25cb3cfd7dd81e84f128288e0c9342164192c
dotenv.config(); // Load environment variables

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(res.statusCode || 500).json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
});


// API Routes

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

// Use food routes
app.use("/api/food", foodRoutes);

// Use restaurant routes
app.use("/api/restaurants", restaurantRoutes);
// app.use('/api/groceries', groceryRoutes);
app.use("/api/groceries", groceryRoutes);

app.use("/api/location", locationRoutes);


// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
