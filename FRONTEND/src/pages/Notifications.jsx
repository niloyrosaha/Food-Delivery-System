import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Notification.css";

const Notification = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Remove user data from localStorage
    navigate("/login"); // Redirect to login page
  };  


  // Navigation handlers
  const goToHome = () => navigate("/order");
  const goToCart = () => navigate("/cart");
  const goToRatings = () => navigate("/ratings");
  const goToProfile = () => navigate("/profile");


  // Sample notifications
  const notifications = [
    {
      id: 1,
      message: "Your order has been placed successfully!",
      time: "0 mins ago",
    }
  ];

  return (
    <div className="notification-page">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2>NAME OF RESTAURANT</h2>
        <img
          src="/images/home.webp"
          alt="Home"
          className="nav-icon"
          onClick={goToHome}
        />
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
          src="/images/profile.png"
          alt="Profile"
          className="nav-icon"
          onClick={goToProfile}
        />
        <img
          src="/images/logout.png"
          alt="Logout"
          className="nav-icon"
          onClick={handleLogout}
        />
      </div>

      {/* Notification Section */}
      <div className="notification-container">
        <h1 className="notification-title">Notifications</h1>
        <ul className="notification-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <p className="notification-message">{notification.message}</p>
              <span className="notification-time">{notification.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notification;
