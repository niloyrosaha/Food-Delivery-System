import express from "express";
import {
  getRiderLocation,
  updateRiderLocation,
} from "../controllers/locationController.js";

const router = express.Router();

router.get("/location", getRiderLocation); // Get rider's location
router.post("/location", updateRiderLocation); // Update rider's location

export default router;
