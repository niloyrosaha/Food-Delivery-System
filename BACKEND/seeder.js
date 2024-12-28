import mongoose from "mongoose";
import FoodItem from "./models/foodModel.js";  // Import the FoodItem model

// Seed data for food items
const foodItems = [
  {
    name: "Bashmati Kacchi",
    image: "/images/kacchi_bhai/kacchi1.png",
    price: 300,
    calories: 500,
  },
  {
    name: "Kacchi Khadok",
    image: "/images/kacchi_bhai/kacchi2.png",
    price: 350,
    calories: 700,
  },
  {
    name: "Kacchi Platter",
    image: "/images/kacchi_bhai/kacchi3.png",
    price: 450,
    calories: 800,
  },
  {
    name: "Morog Polao",
    image: "/images/kacchi_bhai/morogpolao.png",
    price: 200,
    calories: 400,
  },
];

// Function to seed the food items
const seedFoodItems = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/foodDelivery", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Delete existing food items
    await FoodItem.deleteMany();

    // Insert new food items
    await FoodItem.insertMany(foodItems);
    console.log("Food items seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding food items:", error);
  }
};

// Run the seeding function
seedFoodItems();
