import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Addcart.css";

const AddCart = () => {
  const { state } = useLocation();
  const [cartItems, setCartItems] = useState(state?.cartItems || []);

  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotalCalories = () => {
    return cartItems.reduce((total, item) => total + item.calories, 0);
  };

  const handleRemoveItem = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="add-cart-page">
      <div className="nav-bar">
        <h2>NAME OF RESTAURANT</h2>
        {/* Navigation icons */}
      </div>

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
                <td>{item.price.toLocaleString("en-GB", { minimumIntegerDigits: 3 })}</td>
                <td>{item.calories}</td>
                <td>
                  <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <p>Total Price: {calculateTotalPrice().toLocaleString("en-GB", { minimumIntegerDigits: 3 })} Tk</p>
          <p>Total Calories: {calculateTotalCalories()} kcal</p>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
