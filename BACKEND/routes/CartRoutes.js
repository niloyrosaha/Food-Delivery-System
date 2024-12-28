import cartRoutes from "./routes/cartRoutes.js";

// Add this line to register the cart routes
app.use("/api/cart", cartRoutes);