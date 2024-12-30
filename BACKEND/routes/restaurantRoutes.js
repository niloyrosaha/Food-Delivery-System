import express from "express";
import { getRestaurants } from "../controllers/restaurantController.js";
import { searchRestaurants } from "../controllers/searchController.js";
const router = express.Router();

// Use the controller to handle the route
router.get("/", getRestaurants);


// Search restaurants by query
router.get("/search", searchRestaurants);

export default router;

