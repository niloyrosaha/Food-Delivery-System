import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Ratings.css";

const Ratings = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please provide a rating before submitting.");
      return;
    }
    alert(`You rated the restaurant ${rating} stars.`);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="ratings-page">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2 className="app-name">NAME OF RESTAURANT</h2>
        <div className="nav-icons">
          <img
            src="/images/home.webp"
            alt="Home"
            className="nav-icon"
            onClick={() => navigate("/order")}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            className="nav-icon"
            onClick={() => navigate("/profile")}
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
            src="/images/logout.png"
            alt="Logout"
            className="nav-icon"
            onClick={handleLogout}
          />
        </div>
      </div>

      {/* Ratings Box */}
      <div className="ratings-box">
        
        <div className="restaurant-info">
          <img
            src="/images/kacchibhai.png"
            alt="KacchiBhai"
            className="restaurant-logo"
          />
          <h1 className="restaurant-name">KacchiBhai</h1>
        </div>
        <div className="rating-section">
          <h2>Rate Us</h2>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? "selected" : ""}`}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit Rating
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
