import asyncHandler from "express-async-handler";
import Restaurant from "../models/restaurantModel.js";

// Get all restaurants
export const getRestaurants = asyncHandler(async (req, res) => {
  const searchQuery = req.query.search || ""; // Retrieve the search query
  const query = searchQuery
    ? { name: { $regex: searchQuery, $options: "i" } }
    : {}; // Case-insensitive search
  const restaurants = await Restaurant.find(query);
  res.json(restaurants);
});
