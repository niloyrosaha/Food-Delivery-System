import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId"); // Assuming userId is stored after login
      if (!userId) {
        setError("User not logged in.");
        return navigate("/login");
      }

      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${userId}`);
        setUser(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : "Something went wrong.");
      }
    };

    fetchUserData();
  }, [navigate]);

  const goToHome = () => navigate("/order");
  const goToCart = () => navigate("/cart");
  const goToRatings = () => navigate("/ratings");
  const goToNotifications = () => navigate("/notifications");

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userId"); // Remove user data from localStorage
    navigate("/login"); // Redirect to login page
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="profile-page">
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
          src="/images/notification.png"
          alt="Notification"
          className="nav-icon"
          onClick={goToNotifications}
        />
        <img
          src="/images/logout.png"
          alt="Logout"
          className="nav-icon"
          onClick={handleLogout} // Add onClick handler for logout
        />
      </div>

      {user && (
        <div className="profile-card">
          <img
            src="/images/profile-placeholder.png"
            alt="Profile Avatar"
            className="profile-avatar"
          />
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-detail">Email: {user.email}</p>
          <p className="profile-detail">Address: {user.address}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
