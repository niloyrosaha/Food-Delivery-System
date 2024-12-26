const mongoose = require("mongoose");

// Define the schema
const addCartSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  items: [
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Create the model
const AddCart = mongoose.model("AddCart", addCartSchema);

module.exports = AddCart;
