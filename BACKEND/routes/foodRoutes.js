import express from "express";
import { getAllFoodItems, addFoodItem } from "../controllers/foodController.js";

const router = express.Router();

router.route("/").get(getAllFoodItems).post(addFoodItem);

export default router;
