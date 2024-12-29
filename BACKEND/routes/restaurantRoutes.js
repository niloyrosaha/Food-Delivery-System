import express from "express";
import { getRestaurants } from "../controllers/restaurantController.js";

const router = express.Router();

// Use the controller to handle the route
router.get("/", getRestaurants);

export default router;

