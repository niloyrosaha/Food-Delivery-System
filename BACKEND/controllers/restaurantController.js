import asyncHandler from "express-async-handler";
import Restaurant from "../models/restaurantModel.js";

export const getRestaurants = asyncHandler(async (req, res) => {
  try {
    const searchQuery = req.query.search || "";
    const query = searchQuery
      ? { name: { $regex: searchQuery, $options: "i" } }
      : {};

    const restaurants = await Restaurant.find(query);
    res.status(200).json(restaurants);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ message: "Failed to fetch restaurants" });
  }
});
