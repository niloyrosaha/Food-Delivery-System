import express from "express";
import { getAllPizzaHutItems, addPizzaHutItem } from "../controllers/pizzaHutController.js";

const router = express.Router();

router.route("/").get(getAllPizzaHutItems).post(addPizzaHutItem);

export default router;
