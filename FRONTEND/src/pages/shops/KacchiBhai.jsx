import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/kacchi.css";
 // Ensure the relative path is correct

const KacchiBhai = () => {
  const navigate = useNavigate();

  const goToCart = () => navigate("/cart");
  const goToRatings = () => navigate("/ratings");
  const goToNotifications = () => navigate("/notifications");
  const goToProfile = () => navigate("/profile");

  const foodItems = [
    {
      name: "Bashmati Kacchi",
      image: "/kacchi_bhai/kacchi1.png",
      price: 300,
    },
    {
      name: "Kacchi Khadok",
      image: "/kacchi_bhai/kacchi2.png",
      price: 350,
    },
    {
      name: "Kacchi Platter",
      image: "/kacchi_bhai/kacchi3.png",
      price: 450,
    },
    {
      name: "Morog Polao",
      image: "/kacchi_bhai/morogpolao.png",
      price: 200,
    },
  ];

  return (
    <div className="order-page">
      {/* Sidebar */}
      <div className="sidebar">
        <img
          src="/kacchi_bhai/logo.png"
          alt="Restaurant Logo"
          className="restaurant-logo"
        />
      </div>

      {/* Main Content */}
      <div className="main-content">
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
            alt="Notifications"
            className="nav-icon"
            onClick={goToNotifications}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            className="nav-icon"
            onClick={goToProfile}
          />
        </div>

        {/* Welcome Message */}
        <div className="welcome-message">
          <h1>Enjoy Our Meal</h1>
        </div>

        {/* Food Items */}
        <div className="food-items">
          {foodItems.map((item, index) => (
            <div key={index} className="food-item">
              <img src={item.image} alt={item.name} className="food-image" />
              <h3>{item.name}</h3>
              <p>Price: {item.price} Tk</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KacchiBhai;
