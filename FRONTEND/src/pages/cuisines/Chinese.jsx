import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/american.css"; // Make sure to create or update the CSS file for this page.

const AmericanPage = () => {
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
        <h2>Top Chinese Restaurants</h2>
        <div className="restaurant-items">
          <div
            className="restaurant-item"
            onClick={() => navigateToRestaurant("kfc")}
          >
            <img src="/images/kfc.png" alt="KFC" />
            <p>KFC</p>
          </div>
          <div
            className="restaurant-item"
            onClick={() => navigateToRestaurant("chillox")}
          >
            <img src="/images/chillox.png" alt="Chillox" />
            <p>Chillox</p>
          </div>
          <div
            className="restaurant-item"
            onClick={() => navigateToRestaurant("mcdonalds")}
          >
            <img src="/images/mcdonalds.png" alt="McDonald's" />
            <p>McDonald's</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmericanPage;
