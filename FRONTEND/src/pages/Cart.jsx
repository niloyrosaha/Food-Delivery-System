import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Addcart.css";

const AddCart = () => {
  const { state } = useLocation();
  const [cartItems, setCartItems] = useState(state?.cartItems || []);
  const navigate = useNavigate();

  const calculateTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  const calculateTotalCalories = () =>
    cartItems.reduce((total, item) => total + item.calories, 0);

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const proceedToPayment = () => {
    navigate("/payment", { state: { cartItems, total: calculateTotalPrice() } });
  };

  return (
    <div className="add-cart-page">
      {/* Updated Navigation Bar */}
      <div className="nav-bar">
        <h2 className="app-name">NAME OF RESTAURANT</h2>
        <div className="nav-icons">
          <img
            src="/images/home.webp"
            alt="Home"
            className="nav-icon"
            onClick={() => navigate("/order")}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            className="nav-icon"
            onClick={() => navigate("/profile")}
          />
          <img
            src="/images/star.png"
            alt="Ratings"
            className="nav-icon"
            onClick={() => navigate("/ratings")}
          />
          <img
            src="/images/notification.png"
            alt="Cart"
            className="nav-icon"
            onClick={() => navigate("/notifications")}
          />
          <img
            src="/images/logout.png"
            alt="Logout"
            className="nav-icon"
          />
        </div>
      </div>

      {/* Rest of the Code Remains Unchanged */}
      <div className="add-cart">
        <h1>Your Cart</h1>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Price (Tk)</th>
              <th>Calories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price.toLocaleString()}</td>
                <td>{item.calories}</td>
                <td>
                  <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <p>Total Price: {calculateTotalPrice().toLocaleString()} Tk</p>
          <p>Total Calories: {calculateTotalCalories()} kcal</p>
        </div>
        <button className="proceed-button" onClick={proceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default AddCart;
