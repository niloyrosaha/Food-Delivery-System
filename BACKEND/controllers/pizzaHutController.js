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

// Add a new Pizza Hut food item getAllPizzaHutItems, addPizzaHutItem 
export const addPizzaHutItem = async (req, res) => {
  try {
    const { name, price, calories, image } = req.body;

    if (!name || !price || !calories || !image) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newPizzaItem = new PizzaHut({ name, price, calories, image });
    const savedPizzaItem = await newPizzaItem.save();

    res.status(201).json(savedPizzaItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to add Pizza Hut item.", error });
  }
};
