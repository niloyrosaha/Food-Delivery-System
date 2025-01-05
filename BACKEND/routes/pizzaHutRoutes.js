import express from "express";
import { getAllPizzaHutItems, addPizzaHutItem} from "../controllers/pizzaHutController.js";

const router = express.Router();

router.get("/", getAllPizzaHutItems); // Fetch all Pizza Hut items  getAllPizzaHutItems, addPizzaHutItem
router.post("/", addPizzaHutItem);

export default router;
