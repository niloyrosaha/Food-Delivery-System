import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/OrderPage.css";

const OrderPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch restaurants on load
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/restaurants");
        setRestaurants(response.data);
        setFilteredRestaurants(response.data.slice(0, 5)); // Initially display only 5 restaurants
      } catch (err) {
        setError("Failed to fetch restaurants.");
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredRestaurants(restaurants.slice(0, 5)); // Reset to top 5 if no search query
    } else {
      const results = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRestaurants(results);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Remove user data from localStorage
    navigate("/login"); // Redirect to login page
  };  

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
          onClick={handleLogout}
        />
      </div>

      {/* Search Bar */}
      <div className="search-filter-bar">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for dishes or restaurants..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {/* Row 1: Top Restaurants */}
      <div className="row restaurants-section">
        <h2>Top Restaurants</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : filteredRestaurants.length === 0 ? (
          <p>No restaurants found</p>
        ) : (
          <div className="restaurant-items">
            {filteredRestaurants.map((restaurant) => (
              <div
                className="restaurant-item"
                key={restaurant._id}
                onClick={() => navigateToRestaurant(restaurant.name)}
              >
                <img src={restaurant.image} alt={restaurant.name} />
                <p>{restaurant.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Row 2: Discounts */}
      <div className="row discounts-section">
        <h2>Discount Restaurants</h2>
        <div className="discount-items">
          <div className="discount-item">Pizza House - 20% Off</div>
          <div className="discount-item">Burger Stop - Buy 1 Get 1</div>
          <div className="discount-item">Sushi World - 15% Off</div>
        </div>
      </div>

      {/* Row 3: Services */}
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

      {/* Row 4: Cuisines */}
      <div className="row cuisines-section">
        <h2>Cuisines</h2>
        <div className="cuisines-items">
          <div
            className="cuisine-item"
            onClick={() => navigateToCuisine("Italian")}
          >
            Italian
          </div>
          <div
            className="cuisine-item"
            onClick={() => navigateToCuisine("Chinese")}
          >
            Chinese
          </div>
          <div
            className="cuisine-item"
            onClick={() => navigateToCuisine("American")}
          >
            American
          </div>
          <div
            className="cuisine-item"
            onClick={() => navigateToCuisine("PanAsian")}
          >
            Pan Asian
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
