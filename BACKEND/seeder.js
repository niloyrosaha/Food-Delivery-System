import mongoose from "mongoose";
import dotenv from "dotenv";
import FoodItem from "./models/foodModel.js";
import Restaurant from "./models/restaurantModel.js";
import Rider from './models/riderModel.js'
import PremiumFood from "./models/premiumFoodModel.js";
dotenv.config(); // Load .env variables


// Seed data for riders
const riders = [
  {
    name: "Ezazul Mahi",
    currentLocation: { latitude: 23.8103, longitude: 90.4125 }, // Dhaka coordinates
  },
];



const premiumFoodItems = [
  {
    name: "Salad",
    image: "/images/premium/salad.png",
    pricePerGram: 0.9,
    caloriesPerGram: 0.15,
  },
  {
    name: "Rice",
    image: "/images/premium/rice.png",
    pricePerGram: 0.9,
    caloriesPerGram: 1.3,
  },
  {
    name: "Chicken",
    image: "/images/premium/chicken.png",
    pricePerGram: 0.9,
    caloriesPerGram: 2.4,
  },
  {
    name: "Veggies",
    image: "/images/premium/veggies.png",
    pricePerGram: 0.9,
    caloriesPerGram: 0.8,
  },
  {
    name: "Prawns",
    image: "/images/premium/prawns.png",
    pricePerGram: 0.9,
    caloriesPerGram: 1.9,
  },
  {
    name: "Fish",
    image: "/images/premium/fish.png",
    pricePerGram: 0.9,
    caloriesPerGram: 1.5,
  },
];


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

// Seed data function
const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB Atlas");

    // Clear existing collections
    await FoodItem.deleteMany();
    await Restaurant.deleteMany();
    await Rider.deleteMany();
    console.log("Collections cleared");

    // Insert food items
    await FoodItem.insertMany(foodItems);
    console.log("Food items seeded");

    // Insert restaurants
    await Restaurant.insertMany(restaurants);
    console.log("Restaurants seeded");

        // Insert riders
    await Rider.insertMany(riders);
    console.log("Riders seeded");

    await PremiumFood.deleteMany();
    await PremiumFood.insertMany(premiumFoodItems);
    console.log("Premium food items seeded successfully!");

    // Close the database connection
    mongoose.connection.close();
    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
};

// Run the seed function
seedData();
