import Food from "../models/foodModel.js";

// Get all food items
export const getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await Food.find({});
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new food item
export const addFoodItem = async (req, res) => {
  const { name, price, calories, image } = req.body;

  try {
    const food = new Food({
      name,
      price,
      calories,
      image,
    });

    const createdFood = await food.save();
    res.status(201).json(createdFood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
