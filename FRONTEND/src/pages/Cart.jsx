import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Addcart.css";

const AddCart = () => {
  const [cartItems, setCartItems] = useState([
    { name: "Sushi", price: 350, calories: 200 },
    { name: "Pizza", price: 500, calories: 400 },
    { name: "Burger", price: 250, calories: 300 },
  ]);

  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotalCalories = () => {
    return cartItems.reduce((total, item) => total + item.calories, 0);
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
                <td>{item.price.toLocaleString('en-GB', { minimumIntegerDigits: 3 })}</td> {/* Price formatted */}
                <td>{item.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <p>Total Price: {calculateTotalPrice().toLocaleString('en-GB', { minimumIntegerDigits: 3 })} Tk</p>
          <p>Total Calories: {calculateTotalCalories()} kcal</p>
        </div>
      </div>
    </div>
  );
};

export default AddCart;


