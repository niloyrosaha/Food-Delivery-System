import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/kacchiBhai.css"; 

const pizzahut= () => {
  const navigate = useNavigate();

  const goToCart = () => navigate("/cart");
  const goToRatings = () => navigate("/ratings");
  const goToNotifications = () => navigate("/notifications");
  const goToProfile = () => navigate("/profile");

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log("Cart Items:", cart);
  };

  const foodItems = [
    {
      name: "Garlic Bread",
      image: "/images/pizzahut/garlic.webp",
      price: 100,
      calories: 50,
    },
    {
      name: "Chicken Pizza",
      image: "/images/pizzahut/chicken.jpg",
      price: 250,
      calories: 700,
    },
    {
      name: "Beef Pizza",
      image:"/images/pizzahut/beef.jpg",
      price: 350,
      calories: 800,
    },
    {
      name: "Chicken Exotica",
      image: "/images/pizzahut/ChickenExotica.jpg",
      price: 400,
      calories: 400,
    },
  ];

  return (
    <div className="orderPage">
      {/* Sidebar */}
      <div className="sidebar">
        <img
          src="/images/pizzahut/logo.png"
          alt="Restaurant Logo"
          className="restaurantLogo"
        />
      </div>

      {/* Main Content */}
      <div className="mainContent">
        {/* Navigation Bar */}
        <div className="navBar">
          <h2>NAME OF RESTAURANT</h2>
          <img
            src="/images/cart.png"
            alt="Cart"
            className="navIcon"
            onClick={goToCart}
          />
          <img
            src="/images/star.png"
            alt="Ratings"
            className="navIcon"
            onClick={goToRatings}
          />
          <img
            src="/images/notification.png"
            alt="Notifications"
            className="navIcon"
            onClick={goToNotifications}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            className="navIcon"
            onClick={goToProfile}
          />
        </div>

        {/* Welcome Message */}
        <div className="welcomeMessage">
          <h1 className="welcomeText">Enjoy Our Meal</h1>
        </div>

        {/* Food Items */}
        <div className="foodItems">
          {foodItems.map((item, index) => (
            <div key={index} className="foodItem">
              <img
                src={item.image}
                alt={item.name}
                className="foodImage"
              />
              <h3 className="foodName">{item.name}</h3>
              <p className="foodPrice">Price: {item.price} Tk</p>
              <p className="foodCalories">Calories: {item.calories} kcal</p>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
              Add <img src="/images/cart.png" alt="Cart Icon" className="cart-icon" />
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default pizzahut;