import mongoose from "mongoose";

const premiumFoodSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    pricePerGram: { type: Number, required: true },
    caloriesPerGram: { type: Number, required: true },
  },
  { timestamps: true }
);

const PremiumFood = mongoose.model("PremiumFood", premiumFoodSchema);

export default PremiumFood;
