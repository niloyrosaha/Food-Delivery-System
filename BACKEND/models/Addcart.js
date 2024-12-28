import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User", // Assuming a user model exists
  },
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      calories: { type: Number, required: true },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;