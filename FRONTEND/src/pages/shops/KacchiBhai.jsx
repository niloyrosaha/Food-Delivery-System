import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/kacchiBhai.css";

const KacchiBhai = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/food");
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
    setCart((prevCart) => [...prevCart, item]);
  };

  const goToCart = () => {
    navigate("/cart", { state: { cartItems: cart } });
  };

  return (
    <div className="kacchiBhaiPage">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2>Kacchi Bhai</h2>
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
            onClick={() => navigate("/ratings")}
          />
          <img
            src="/images/notification.png"
            alt="Notifications"
            className="nav-icon"
            onClick={() => navigate("/notifications")}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            className="nav-icon"
            onClick={() => navigate("/profile")}
          />
        </div>
      </div>

      {/* Restaurant Logo and Name */}
      <div className="restaurant-header">
        <img
          src="/images/kacchibhai.png"
          alt="Restaurant Logo"
          className="restaurant-logo"
        />
        <h3 className="restaurant-name">Kacchi Bhai</h3>
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
  );
};

export default KacchiBhai;
