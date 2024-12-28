import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/kacchiBhai.css"; 

const KacchiBhai = () => {
  const [foodItems, setFoodItems] = useState([]);
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

  const goToCart = () => navigate("/cart");
  const goToRatings = () => navigate("/ratings");
  const goToNotifications = () => navigate("/notifications");
  const goToProfile = () => navigate("/profile");

  const handleAddToCart = (item) => {
    console.log("Added to Cart:", item);
  };

  return (
    <div className="orderPage">
      {/* Sidebar */}
      <div className="sidebar">
        <img
          src="/images/kacchi_bhai/logo.png"
          alt="Restaurant Logo"
          className="restaurantLogo"
        />
      </div>

      {/* Main Content */}
      <div className="mainContent">
        {/* Navigation Bar */}
        <div className="navBar">
          <h2>NAME OF RESTAURANT</h2>
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
            onClick={goToRatings}
          />
          <img
            src="/images/notification.png"
            alt="Notifications"
            className="navIcon"
            onClick={goToNotifications}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            className="navIcon"
            onClick={goToProfile}
          />
        </div>

        {/* Welcome Message */}
        <div className="welcomeMessage">
          <h1 className="welcomeText">Enjoy Our Meal</h1>
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
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
                Add <img src="/images/cart.png" alt="Cart Icon" className="cart-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KacchiBhai;
