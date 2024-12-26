const mongoose = require("mongoose");

// Define the schema
const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    lowercase: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
});

// Create the model
const Register = mongoose.model("Register", registerSchema);

module.exports = Register;

