import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FoodDelivery.css";

const FoodDelivery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/restaurants");
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchRestaurants();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Remove user data from localStorage
    navigate("/login"); // Redirect to login page
  };  

  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };

  const handleShopClick = (shopName) => {
    navigate(`/shops/${shopName.toLowerCase()}`);
  };

  // Filter restaurants based on search query
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
          onClick={handleLogout}
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
          {filteredRestaurants.map((shop) => (
            <div
              className="shop-item"
              key={shop.name}
              onClick={() => handleShopClick(shop.name)}
            >
              <img
                src={shop.image}
                alt={shop.name}
                className="shop-image"
              />
              <p className="shop-name">{shop.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDelivery;
