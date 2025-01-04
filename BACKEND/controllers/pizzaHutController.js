import PizzaHut from "../models/pizzaHutModel.js";

// Get all Pizza Hut food items
export const getAllPizzaHutItems = async (req, res) => {
  try {
    const foodItems = await PizzaHut.find({});
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new Pizza Hut food item
export const addPizzaHutItem = async (req, res) => {
  const { name, price, calories, image } = req.body;

  try {
    const food = new PizzaHut({
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
