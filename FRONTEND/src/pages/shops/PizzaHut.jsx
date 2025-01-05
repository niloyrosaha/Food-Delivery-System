import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/kacchiBhai.css"; // Update the CSS file path if necessary

const PizzaHut = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);
  const navigate = useNavigate();

  // Fetch food items from the backend
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzahut");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, []);

  const handleAddToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Save to localStorage
  };

  const goToCart = () => {
    navigate("/cart", { state: { cartItems: cart } });
  };

  return (
    <div className="orderPage">
      {/* Sidebar */}
      <div className="sidebar">
        <img
          src="/images/pizzahut/logo.png"
          alt="Restaurant Logo"
          className="restaurantLogo"
        />
      </div>

      {/* Main Content */}
      <div className="mainContent">
        {/* Navigation Bar */}
        <div className="navBar">
          <h2>Pizza Hut</h2>
          <img
            src="/images/cart.png"
            alt="Cart"
            className="navIcon"
            onClick={goToCart}
          />
          <img
            src="/images/star.png"
            alt="Ratings"
            className="navIcon"
            onClick={() => navigate("/ratings")}
          />
          <img
            src="/images/notification.png"
            alt="Notifications"
            className="navIcon"
            onClick={() => navigate("/notifications")}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            className="navIcon"
            onClick={() => navigate("/profile")}
          />
        </div>

        {/* Welcome Message */}
        <div className="welcomeMessage">
          <h1 className="welcomeText">Welcome to Pizza Hut</h1>
        </div>

        {/* Food Items */}
        <div className="foodItems">
          {foodItems.map((item, index) => (
            <div key={index} className="foodItem">
              <img
                src={item.image}
                alt={item.name}
                className="foodImage"
              />
              <h3 className="foodName">{item.name}</h3>
              <p className="foodPrice">Price: {item.price} Tk</p>
              <p className="foodCalories">Calories: {item.calories} kcal</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(item)}
              >
                Add <img src="/images/cart.png" alt="Cart Icon" className="cart-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaHut;
