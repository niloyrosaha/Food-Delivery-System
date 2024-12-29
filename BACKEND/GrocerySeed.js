import mongoose from "mongoose";
import Grocery from "../models/GroceryModel.js";
import dotenv from "dotenv";

// Configure dotenv
dotenv.config();

// Seed data for groceries
const groceries = [
  { name: "Flour", image: "/images/Flour.webp", price: 4, calories: 364 },
  { name: "Oil", image: "/images/Oil.jpg", price: 3, calories: 884 },
  { name: "Potato", image: "/images/Potato.jpg", price: 2, calories: 77 },
  { name: "Rice", image: "/images/Rice.jpg", price: 10, calories: 130 },
  { name: "Salt", image: "/images/salt.jpg", price: 1, calories: 0 },
  { name: "Sugar", image: "/images/sugar.jpg", price: 2, calories: 387 },
];

// Function to seed the database
const seedGroceries = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB!");

    // Clear existing data
    console.log("Deleting existing groceries...");
    await Grocery.deleteMany();
    console.log("Existing groceries deleted!");

    // Insert new grocery data
    console.log("Inserting new grocery data...");
    await Grocery.insertMany(groceries);
    console.log("Grocery database seeded successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding grocery data:", error);
    process.exit(1); // Exit with failure
  }
};

// Run the seeding function
seedGroceries();
