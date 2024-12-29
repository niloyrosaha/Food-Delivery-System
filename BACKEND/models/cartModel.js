import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  items: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Food",
      },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
