import mongoose from "mongoose";
import dotenv from "dotenv";
import PizzaHut from "./models/pizzaHutModel.js";

dotenv.config();

const pizzaHutItems = [
  {
    name: "Garlic Bread",
    image: "/images/pizzahut/garlic.webp",
    price: 100,
    calories: 50,
  },
  {
    name: "Chicken Pizza",
    image: "/images/pizzahut/chicken.jpg",
    price: 250,
    calories: 700,
  },
  {
    name: "Beef Pizza",
    image: "/images/pizzahut/beef.jpg",
    price: 350,
    calories: 800,
  },
  {
    name: "Chicken Exotica",
    image: "/images/pizzahut/ChickenExotica.jpg",
    price: 400,
    calories: 400,
  },
];

const seedPizzaHutData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    await PizzaHut.deleteMany();
    console.log("Pizza Hut collection cleared");

    await PizzaHut.insertMany(pizzaHutItems);
    console.log("Pizza Hut items seeded");

    mongoose.connection.close();
    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1);
  }
};

seedPizzaHutData();
