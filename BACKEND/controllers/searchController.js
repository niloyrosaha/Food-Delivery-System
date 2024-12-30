import Restaurant from "../models/restaurantModel.js";

// Controller to search restaurants by name
export const searchRestaurants = async (req, res) => {
  try {
    const { query } = req.query; // Extract search query
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Case-insensitive search for restaurant names
    const restaurants = await Restaurant.find({
      name: { $regex: query, $options: "i" },
    });

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Failed to search restaurants", error });
  }
};
