import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRoutes from "./routes/foodRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import groceryRoutes from "./routes/GroceryRoutes.js";
import { signup, login } from './controllers/UserController.js';

dotenv.config(); // Load environment variables

// Connect to MongoDB
connectDB();


const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use((req, res, next) => {
  const contentLength = req.headers["content-length"];
  console.log(
    `==> \x1b[33m${req.method} ${req.url}\x1b[0m` +
      " " +
      `\x1b[36mPayload Size: ${
        contentLength ? contentLength + " bytes" : "unknown"
      }\x1b[0m\n`
  );
  next();
});

app.post("/api/auth/signup", signup);
app.post("/api/auth/login", login);

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("MongoDB connection failed:", error);
//     process.exit(1);
//   }
// };

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
