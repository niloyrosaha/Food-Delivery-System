import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FoodDelivery.css";

const FoodDelivery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };

  const handleShopClick = (shopName) => {
    navigate(`/shops/${shopName.toLowerCase()}`);
  };

  return (
    <div className="food-delivery-page">
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

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for restaurants or dishes..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Shops Section */}
      <div className="shops-section">
        <h2>Restaurants</h2>
        <div className="shops-container">
          {[
            "KFC",
            "Yumcha",
            "KacchiBhai",
            "SultanDines",
            "PizzaHut",
            "PizzaBurg",
            "TastyTreat",
            "Chillox",
            "McDonalds",
          ].map((shop) => (
            <div
              className="shop-item"
              key={shop}
              onClick={() => handleShopClick(shop)}
            >
              <img
                src={`/images/${shop.toLowerCase()}.png`}
                alt={shop}
                className="shop-image"
              />
              <p className="shop-name">{shop}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDelivery;
