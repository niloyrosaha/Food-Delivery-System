import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GroceryPage.css";

const GroceryPage = () => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/groceries");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setGroceryItems(data);
      } catch (error) {
        console.error("Error fetching groceries:", error);
      }
    };

    fetchGroceries();
  }, []);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); // Correctly appending to the cart
  };

  const goToCart = () => {
    navigate("/cart", { state: { cartItems: cart } });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = groceryItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grocery-page">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2>Grocery Store</h2>
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

      {/* Search Bar */}
      <div className="search-filter-bar">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for grocery products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Grocery Items */}
      <div className="grocery-items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="grocery-item">
              <img
                src={`/images/${item.image}`} // Corrected image path
                alt={item.name}
                className="grocery-image"
              />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Calories: {item.calories} kcal</p>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-items-message">No grocery items found.</p>
        )}
      </div>
    </div>
  );
};

export default GroceryPage;
