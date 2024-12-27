import express from "express";
import { registerUser, authUser } from "../controllers/userController.js";

const router = express.Router();

// Route for user registration
router.post("/signup", registerUser);

// Route for user login
router.post("/login", authUser);

export default router;
