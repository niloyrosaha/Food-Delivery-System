import mongoose from "mongoose";
import dotenv from "dotenv";
import PremiumFood from "../models/premiumFoodModel.js";

dotenv.config();

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

const seedPremiumFood = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected for premium food seeding");

    await PremiumFood.deleteMany();
    await PremiumFood.insertMany(premiumFoodItems);

    console.log("Premium food items seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding premium food items:", error);
    process.exit(1);
  }
};

seedPremiumFood();
