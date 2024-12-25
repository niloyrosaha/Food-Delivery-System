import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AddCart.css";

const AddCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Fetch data from backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/addtocart"); // Replace with your API URL
        setCartItems(response.data);
      } catch (err) {
        console.error("Error fetching cart items:", err);
      }
    };
    fetchCartItems();
  }, []);

  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  const calculateTotalCalories = () =>
    cartItems.reduce((total, item) => total + item.calories, 0);

  const handleConfirm = () => {
    alert("Your cart has been confirmed!");
    // Additional backend logic for confirming the cart can be added here
  };

  // Navigation handlers
  const goToCart = () => navigate("/cart");
  const goToRatings = () => navigate("/ratings");
  const goToNotifications = () => navigate("/notifications");
  const goToProfile = () => navigate("/profile");

  return (
    <div className="add-cart-page">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2>NAME OF RESTAURANT</h2>
        <div className="nav-icons">
          <img
            src="/images/cart.png"
            alt="Cart"
            className="nav-icon"
            onClick={goToCart}
          />
          <img
            src="/images/star.png"
            alt="Ratings"
            className="nav-icon"
            onClick={goToRatings}
          />
          <img
            src="/images/notification.png"
            alt="Notifications"
            className="nav-icon"
            onClick={goToNotifications}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            className="nav-icon"
            onClick={goToProfile}
          />
        </div>
      </div>

      {/* Cart Section */}
      <div className="add-cart">
        <h1>Your Cart</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Price (Tk)</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price.toLocaleString("en-GB", {
                  minimumIntegerDigits: 3,
                })}</td>
                <td>{item.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <p>Total Price: {calculateTotalPrice().toLocaleString("en-GB", {
            minimumIntegerDigits: 3,
          })} Tk</p>
          <p>Total Calories: {calculateTotalCalories()} kcal</p>
        </div>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddCart;
