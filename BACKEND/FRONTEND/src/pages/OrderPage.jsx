import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OrderPage.css";

const OrderPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    cuisine: "",
    priceRange: "",
    dietary: "",
    ratings: "",
  });

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
    console.log("Applied Filters:", filters);
  };

  // Navigation handlers for navbar icons
  const goToCart = () => {
    navigate("/cart");
  };

  const goToRatings = () => {
    navigate("/ratings");
  };

  const goToNotifications = () => {
    navigate("/notifications");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  // Navigation handlers for cuisines and restaurants
  const navigateToCuisine = (cuisine) => {
    navigate(`/cuisines/${cuisine.toLowerCase()}`);
  };

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
          alt="Notification"
          className="nav-icon"
          onClick={goToNotifications}
        />
        <img
          src="/images/profile.png"
          alt="Profile"
          className="nav-icon"
          onClick={goToProfile}
        />
        <img
          src="/images/logout.png"
          alt="Logout"
          className="nav-icon"
        />
      </div>

      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for dishes or restaurants..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="filters">
          <select
            name="cuisine"
            value={filters.cuisine}
            onChange={handleFilterChange}
          >
            <option value="">All Cuisines</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="Mexican">Mexican</option>
          </select>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
          >
            <option value="">All Prices</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <select
            name="dietary"
            value={filters.dietary}
            onChange={handleFilterChange}
          >
            <option value="">Any Dietary</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
          <select
            name="ratings"
            value={filters.ratings}
            onChange={handleFilterChange}
          >
            <option value="">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
          </select>
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>

      {/* Row 1: Discounts */}
      <div className="row discounts-section">
        <h2>Discount Restaurants</h2>
        <div className="discount-items">
          <div className="discount-item">Pizza House - 20% Off</div>
          <div className="discount-item">Burger Stop - Buy 1 Get 1</div>
          <div className="discount-item">Sushi World - 15% Off</div>
        </div>
      </div>

      {/* Row 2: Services */}
      <div className="row services-section">
        <h2>Services</h2>
        <div className="services-items">
          <div className="service-item" onClick={() => navigate("/grocery")}>
            Grocery Shop
          </div>
          <div
            className="service-item"
            onClick={() => navigate("/food-delivery")}
          >
            Food Delivery
          </div>
          <div
            className="service-item"
            onClick={() => navigate("/update-premium")}
          >
            Premium
          </div>
        </div>
      </div>

      {/* Row 3: Cuisines */}
      <div className="row cuisines-section">
        <h2>Cuisines</h2>
        <div className="cuisines-items">
          <div className="cuisine-item" onClick={() => navigateToCuisine("Italian")}>Italian</div>
          <div className="cuisine-item" onClick={() => navigateToCuisine("Chinese")}>Chinese</div>
          <div className="cuisine-item" onClick={() => navigateToCuisine("American")}>American</div>
          <div className="cuisine-item" onClick={() => navigateToCuisine("PanAsian")}>Pan Asian</div>
        </div>
      </div>

      {/* Row 4: Top Restaurants */}
      <div className="row restaurants-section">
        <h2>Top Restaurants</h2>
        <div className="restaurant-items">
          <div className="restaurant-item" onClick={() => navigateToRestaurant("kfc")}>
            <img src="/images/kfc.png" alt="KFC" />
            <p>KFC</p>
          </div>
          <div className="restaurant-item" onClick={() => navigateToRestaurant("pizzahut")}>
            <img src="/images/pizzahut.png" alt="Pizza Hut" />
            <p>Pizza Hut</p>
          </div>
          <div className="restaurant-item" onClick={() => navigateToRestaurant("kacchibhai")}>
            <img src="/images/kacchibhai.png" alt="KacchiBhai" />
            <p>KacchiBhai</p>
          </div>
          <div className="restaurant-item" onClick={() => navigateToRestaurant("yumcha")}>
            <img src="/images/yumcha.png" alt="Yumcha" />
            <p>YumCha</p>
          </div>
          <div className="restaurant-item" onClick={() => navigateToRestaurant("chillox")}>
            <img src="/images/chillox.png" alt="Chillox" />
            <p>Chillox</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
