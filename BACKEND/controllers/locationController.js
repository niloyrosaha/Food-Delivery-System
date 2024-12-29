import Rider from "../models/riderModel.js";

// Get rider's current location
export const getRiderLocation = async (req, res) => {
  try {
    const rider = await Rider.findOne(); // Assuming one rider for simplicity
    if (!rider) {
      return res.status(404).json({ message: "Rider not found" });
    }
    res.json(rider.currentLocation);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update rider's location (simulation)
export const updateRiderLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const rider = await Rider.findOne(); // Assuming one rider for simplicity
    if (!rider) {
      return res.status(404).json({ message: "Rider not found" });
    }

    rider.currentLocation = { latitude, longitude };
    rider.updatedAt = Date.now();
    await rider.save();

    res.json({ message: "Location updated successfully", rider });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
