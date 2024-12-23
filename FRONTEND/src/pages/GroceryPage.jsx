import React, { useState } from "react";

import "../styles/GroceryPage.css";

const GroceryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    console.log("Search for:", searchQuery);
    // Add functionality to handle search logic here
  };

  const groceryItems = [
    { name: "Flour", weight: "5kg", price: "$4", calories: "364 kcal", image: "/images/Flour.webp" },
    { name: "Oil", weight: "1L", price: "$3", calories: "884 kcal", image: "/images/Oil.jpg" },
    { name: "Potato", weight: "2kg", price: "$2", calories: "77 kcal", image: "/images/Potato.jpg" },
    { name: "Rice", weight: "5kg", price: "$10", calories: "130 kcal", image: "/images/Rice.jpg" },
    { name: "Salt", weight: "1kg", price: "$1", calories: "0 kcal", image: "/images/salt.jpg" },
    { name: "Sugar", weight: "1kg", price: "$2", calories: "387 kcal", image: "/images/sugar.jpg" },
  ];

  return (
    <div className="grocery-page">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2>Grocery Store</h2>
        <div className="nav-icons">
          <img src="/images/cart.png" alt="Cart" className="nav-icon" />
          <img src="/images/star.png" alt="Ratings" className="nav-icon" />
          <img src="/images/notification.png" alt="Notification" className="nav-icon" />
          <img src="/images/profile.png" alt="Profile" className="nav-icon" />
          <img src="/images/logout.png" alt="Logout" className="nav-icon" />
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
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>

      {/* Grocery Items */}
      <div className="grocery-items">
        {groceryItems.map((item, index) => (
          <div className="grocery-item" key={index}>
            <img src={item.image} alt={item.name} className="grocery-image" />
            <h3>{item.name}</h3>
            <p>Weight: {item.weight}</p>
            <p>Price: {item.price}</p>
            <p>Calories: {item.calories}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryPage;
