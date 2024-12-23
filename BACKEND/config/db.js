const mongoose = require("mongoose");

// Replace placeholders with your credentials
const username = "user471";
const password = "471471";
const uri = `mongodb://${username}:${password}@<hostname>/?ssl=true&replicaSet=atlas-zp6r3z-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

// Connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(uri, options);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
