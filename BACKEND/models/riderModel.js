import mongoose from "mongoose";

const riderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  currentLocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  updatedAt: { type: Date, default: Date.now },
});

const Rider = mongoose.model("Rider", riderSchema);

export default Rider;
