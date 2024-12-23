import React from "react";
import "../styles/StartPage.css";

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="overlay">
        <h1 className="app-name">Welcome to Foodie's Haven</h1>
        <p className="welcome-message">
          Your ultimate destination for delicious meals and seamless food ordering.
        </p>
        {/* Navigation Bar */}
        <div className="nav-bar">
          <button onClick={() => (window.location.href = "/login")}>Login</button>
          <button onClick={() => (window.location.href = "/signup")}>Sign Up</button>
          <button onClick={() => (window.location.href = "/about")}>About Us</button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
