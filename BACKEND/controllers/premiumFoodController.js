import PremiumFood from "../models/premiumFoodModel.js";

// Get all premium food items
export const getAllPremiumFoodItems = async (req, res) => {
  try {
    const foodItems = await PremiumFood.find({});
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new premium food item
export const addPremiumFoodItem = async (req, res) => {
  const { name, image, pricePerGram, caloriesPerGram } = req.body;

  try {
    const food = new PremiumFood({
      name,
      image,
      pricePerGram,
      caloriesPerGram,
    });

    const createdFood = await food.save();
    res.status(201).json(createdFood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
