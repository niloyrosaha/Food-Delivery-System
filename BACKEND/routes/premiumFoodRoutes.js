import express from "express";
import { getAllPremiumFoodItems, addPremiumFoodItem } from "../controllers/premiumFoodController.js";

const router = express.Router();

// Get all premium food items
router.get("/", getAllPremiumFoodItems);

// Add a new premium food item
router.post("/", addPremiumFoodItem);

export default router;
