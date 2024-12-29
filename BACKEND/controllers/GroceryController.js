import asyncHandler from "express-async-handler";
import Grocery from "../models/GroceryModel.js";

// Get all groceries
const getAllGroceries = asyncHandler(async (req, res) => {
  const groceries = await Grocery.find({});
  res.json(groceries);
});

// Add a new grocery item
const addGrocery = asyncHandler(async (req, res) => {
  const { name, price, calories, image } = req.body;

  const newGrocery = new Grocery({
    name,
    price,
    calories,
    image,
  });

  const createdGrocery = await newGrocery.save();
  res.status(201).json(createdGrocery);
});

export { getAllGroceries, addGrocery };
