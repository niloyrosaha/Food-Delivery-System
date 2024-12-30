import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/italian.css";

const italianPage = () => {
  const navigate = useNavigate();

  const navigateToRestaurant = (restaurant) => {
    navigate(`/shops/${restaurant.toLowerCase()}`);
  };

  return (
    <div className="order-page">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2>NAME OF RESTAURANT</h2>
        <img
          src="/images/cart.png"
          alt="Cart"
          className="nav-icon"
          onClick={() => navigate("/cart")}
        />
        <img
          src="/images/star.png"
          alt="Ratings"
          className="nav-icon"
          onClick={() => navigate("/ratings")}
        />
        <img
          src="/images/notification.png"
          alt="Notification"
          className="nav-icon"
          onClick={() => navigate("/notifications")}
        />
        <img
          src="/images/profile.png"
          alt="Profile"
          className="nav-icon"
          onClick={() => navigate("/profile")}
        />
        <img
          src="/images/logout.png"
          alt="Logout"
          className="nav-icon"
        />
      </div>

      {/* Restaurants Section */}
      <div className="row restaurants-section">
        <h2>Top Restaurants</h2>
        <div className="restaurant-items">
          <div
            className="restaurant-item"
            onClick={() => navigateToRestaurant("yumcha")}
          >
            <img src="/images/yumcha.png" alt="Yumcha" />
            <p>Yumcha</p>
          </div>
          <div
            className="restaurant-item"
            onClick={() => navigateToRestaurant("pizzaburg")}
          >
            <img src="/images/pizzaburg.png" alt="Pizzaburg" />
            <p>Pizzaburg</p>
          </div>
          <div
            className="restaurant-item"
            onClick={() => navigateToRestaurant("pizzahut")}
          >
            <img src="/images/pizzahut.png" alt="Pizza Hut" />
            <p>Pizza Hut</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default italianPage;

