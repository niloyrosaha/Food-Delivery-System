import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  // Sample user data (replace with actual data source)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main Street, City, Country",
    points: 150, // Example points
    premium: false, // Premium status
  });

  // Navigation handlers
  const goToHome = () => navigate("/order");
  const goToCart = () => navigate("/cart");
  const goToRatings = () => navigate("/ratings");
  const goToNotifications = () => navigate("/notifications");

  return (
    <div className="profile-page">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2>NAME OF RESTAURANT</h2>
        <img
          src="/images/Home.png"
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
          src="/images/notification.png"
          alt="Notification"
          className="nav-icon"
          onClick={goToNotifications}
        />
        <img
          src="/images/logout.png"
          alt="Logout"
          className="nav-icon"
        />
      </div>

      {/* Profile Details */}
      <div className="profile-card">
        <img
          src="/images/profile-placeholder.png"
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-detail">Email: {user.email}</p>
        <p className="profile-detail">Phone: {user.phone}</p>
        <p className="profile-detail">Address: {user.address}</p>
        <p className="profile-detail">Points: {user.points}</p>
        <p className="profile-detail">
          Premium: {user.premium ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default Profile;
