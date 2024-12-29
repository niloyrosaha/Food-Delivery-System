import express from "express";
import { handleRiderLocation } from "../controllers/locationController.js";

const router = express.Router();

// Use the same controller for both GET and POST methods
router.route("/").get(handleRiderLocation).post(handleRiderLocation);

export default router;
