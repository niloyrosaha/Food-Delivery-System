import express from "express";
import { getAllFoodItems, addFoodItem } from "../controllers/foodController.js";

const router = express.Router();

router.get("/", getAllFoodItems); // Fetch all food items
router.post("/", addFoodItem);

export default router;
