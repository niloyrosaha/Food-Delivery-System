import express from "express";
import { getCart, addToCart, removeFromCart } from "../controllers/cartController.js";

const router = express.Router();

router.route("/").get(getCart).post(addToCart);
router.route("/:id").delete(removeFromCart);

export default router;
