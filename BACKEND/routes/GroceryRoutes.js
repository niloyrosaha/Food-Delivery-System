import express from "express";
import { getAllGroceries, addGrocery } from "../controllers/GroceryController.js";

const router = express.Router();

router.route("/").get(getAllGroceries).post(addGrocery);

export default router;
