import React from "react";
import { useNavigate } from "react-router-dom";

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
      calories: 500,
    },
    {
      name: "Kacchi Khadok",
      image: "/kacchi_bhai/kacchi2.png",
      price: 350,
      calories: 700,
    },
    {
      name: "Kacchi Platter",
      image: "/kacchi_bhai/kacchi3.png",
      price: 450,
      calories: 800,
    },
    {
      name: "Morog Polao",
      image: "/kacchi_bhai/morogpolao.png",
      price: 200,
      calories: 400,
    },
  ];

  const styles = {
    orderPage: {
      display: "flex",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#f8f9fa",
    },
    sidebar: {
      width: "20%",
      backgroundColor: "#130404",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    restaurantLogo: {
      width: "80%",
      borderRadius: "10px",
    },
    mainContent: {
      width: "80%",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    navBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      backgroundColor: "#130404",
      padding: "10px 20px",
      color: "white",
      borderRadius: "8px",
    },
    navIcon: {
      width: "40px",
      height: "40px",
      marginLeft: "10px",
      cursor: "pointer",
      transition: "transform 0.2s",
    },
    welcomeMessage: {
      margin: "20px 0",
      textAlign: "center",
    },
    welcomeText: {
      fontSize: "2.5rem",
      color: "#130404",
    },
    foodItems: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "20px",
      width: "100%",
    },
    foodItem: {
      width: "200px",
      backgroundColor: "#fff",
      padding: "15px",
      textAlign: "center",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    foodImage: {
      width: "100%",
      borderRadius: "8px",
      marginBottom: "10px",
    },
    foodName: {
      fontSize: "1.2rem",
      marginBottom: "5px",
      color: "black",
    },
    foodPrice: {
      fontSize: "1rem",
      marginBottom: "10px",
      color: "black",
    },
    foodCalories: {
      fontSize: "0.9rem",
      color: "black",
      marginBottom: "10px",
    },
    addToCartBtn: {
      backgroundColor: "#130404",
      color: "white",
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
  };

  return (
    <div style={styles.orderPage}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <img
          src="/kacchi_bhai/logo.png"
          alt="Restaurant Logo"
          style={styles.restaurantLogo}
        />
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Navigation Bar */}
        <div style={styles.navBar}>
          <h2>NAME OF RESTAURANT</h2>
          <img
            src="/images/cart.png"
            alt="Cart"
            style={styles.navIcon}
            onClick={goToCart}
          />
          <img
            src="/images/star.png"
            alt="Ratings"
            style={styles.navIcon}
            onClick={goToRatings}
          />
          <img
            src="/images/notification.png"
            alt="Notifications"
            style={styles.navIcon}
            onClick={goToNotifications}
          />
          <img
            src="/images/profile.png"
            alt="Profile"
            style={styles.navIcon}
            onClick={goToProfile}
          />
        </div>

        {/* Welcome Message */}
        <div style={styles.welcomeMessage}>
          <h1 style={styles.welcomeText}>Enjoy Our Meal</h1>
        </div>

        {/* Food Items */}
        <div style={styles.foodItems}>
          {foodItems.map((item, index) => (
            <div key={index} style={styles.foodItem}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.foodImage}
              />
              <h3 style={styles.foodName}>{item.name}</h3>
              <p style={styles.foodPrice}>Price: {item.price} Tk</p>
              <p style={styles.foodCalories}>Calories: {item.calories} kcal</p>
              <button style={styles.addToCartBtn}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KacchiBhai;
