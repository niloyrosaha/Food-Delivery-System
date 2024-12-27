import React, { useEffect, useState } from "react";
import "../styles/StartPage.css";

const StartPage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/welcome");
        const data = await response.json();
        setWelcomeMessage(data.message);
      } catch (error) {
        console.error("Error fetching welcome message:", error);
        setWelcomeMessage("Unable to load welcome message. Please try again.");
      }
    };

    fetchWelcomeMessage();
  }, []);

  return (
    <div className="start-page">
      <div className="overlay">
        <div className="nav-bar">
          <h2 className="restaurant-name">MyRestaurant</h2>
          <div className="nav-buttons">
            <button onClick={() => (window.location.href = "/login")}>Login</button>
            <button onClick={() => (window.location.href = "/signup")}>Sign Up</button>
            <button onClick={() => (window.location.href = "/about")}>About Us</button>
          </div>
        </div>
        <h1 className="app-name">Welcome to Foodie's Haven</h1>
        <p className="welcome-message">{welcomeMessage}</p>
      </div>
    </div>
  );
};

export default StartPage;
