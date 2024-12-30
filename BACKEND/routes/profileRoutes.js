import express from "express";
import { getUserProfile } from "../controllers/ProfileController.js";

const router = express.Router();

// Route to get user profile
router.get("/:id", getUserProfile);

export default router;
