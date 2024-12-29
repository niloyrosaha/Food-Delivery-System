import Rider from "../models/riderModel.js";

export const handleRiderLocation = async (req, res) => {
  try {
    const method = req.method;

    if (method === "GET") {
      // Handle fetching the rider's location
      const rider = await Rider.findOne(); // Assuming one rider for simplicity
      if (!rider) {
        return res.status(404).json({ message: "Rider not found" });
      }

      return res.json({
        latitude: rider.currentLocation.latitude,
        longitude: rider.currentLocation.longitude,
      });
    } else if (method === "POST") {
      // Handle updating the rider's location
      const { latitude, longitude } = req.body;

      // Validate latitude and longitude
      if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ message: "Invalid latitude or longitude" });
      }

      const rider = await Rider.findOne(); // Assuming one rider for simplicity
      if (!rider) {
        return res.status(404).json({ message: "Rider not found" });
      }

      rider.currentLocation = { latitude, longitude };
      rider.updatedAt = Date.now(); // Update timestamp
      await rider.save();

      return res.json({
        message: "Location updated successfully",
        currentLocation: rider.currentLocation,
      });
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error handling rider location:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
