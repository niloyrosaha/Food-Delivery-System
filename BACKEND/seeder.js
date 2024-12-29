import mongoose from "mongoose";
import FoodItem from "./models/foodModel.js";
import Restaurant from "./models/restaurantModel.js"; // Import the Restaurant model

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
  {
    name: "Garlic Bread",
    image: "/images/pizzahut/garlic.webp",
    price: 100,
    calories: 50,
  }, {
    name: "Chicken Pizza",
    image: "/images/pizzahut/chicken.jpg",
    price: 250,
    calories: 700,
  },
  {
    name: "Beef Pizza",
    image:"/images/pizzahut/beef.jpg",
    price: 350,
    calories: 800,
  },
  {
    name: "Chicken Exotica",
    image: "/images/pizzahut/ChickenExotica.jpg",
    price: 400,
    calories: 400,
  }
  
];

// Seed data for restaurants
const restaurants = [
  { name: "KFC", image: "/images/kfc.png" },
  { name: "Yumcha", image: "/images/yumcha.png" },
  { name: "KacchiBhai", image: "/images/kacchibhai.png" },
  { name: "SultanDines", image: "/images/sultandines.png" },
  { name: "PizzaHut", image: "/images/pizzahut.png" },
  { name: "PizzaBurg", image: "/images/pizzaburg.png" },
  { name: "TastyTreat", image: "/images/tastytreat.png" },
  { name: "Chillox", image: "/images/chillox.png" },
  { name: "McDonalds", image: "/images/mcdonalds.png" },
];

// Function to seed the database
const seedData = async () => {
  try {
    await mongoose.connect("mongodb+srv://rahmatullahchowdhury:PDZqVztZfnOTb4fN@471.wwgho.mongodb.net/?retryWrites=true&w=majority&appName=471", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Delete existing food items and restaurants
    await FoodItem.deleteMany();
    await Restaurant.deleteMany();

    // Insert new food items and restaurants
    await FoodItem.insertMany(foodItems);
    await Restaurant.insertMany(restaurants);

    console.log("Database seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1); // Exit with failure
  }
};

// Run the seeding function
seedData();
