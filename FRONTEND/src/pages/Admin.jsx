import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/AdminPage.css";

const Admin = () => {
  const navigate = useNavigate();
  const [kacchiBhaiItem, setKacchiBhaiItem] = useState({
    name: "",
    price: "",
    calories: "",
    image: "",
  });
  const [pizzaHutItem, setPizzaHutItem] = useState({
    name: "",
    price: "",
    calories: "",
    image: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  const handleInputChange = (e, restaurant) => {
    const { name, value } = e.target;
  
    if (restaurant === "KacchiBhai") {
      setKacchiBhaiItem((prevState) => ({ ...prevState, [name]: value }));
    } else if (restaurant === "PizzaHut") {
      setPizzaHutItem((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  // Handle adding item to KacchiBhai
  const handleAddKacchiBhaiItem = async () => {
    try {
      const apiUrl = "http://localhost:5000/api/food";
      await axios.post(apiUrl, kacchiBhaiItem);
      alert("New item added to KacchiBhai!");
      setKacchiBhaiItem({ name: "", price: "", calories: "", image: "" });
    } catch (error) {
      alert("Error adding item. Please try again.");
      console.error(error);
    }
  };

  // Handle adding item to PizzaHut
  const handleAddPizzaHutItem = async () => {
    try {
      const apiUrl = "http://localhost:5000/api/pizzahut";
      await axios.post(apiUrl, pizzaHutItem);
      alert("New item added to PizzaHut!");
      setPizzaHutItem({ name: "", price: "", calories: "", image: "" });
    } catch (error) {
      alert("Error adding item. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="admin-page">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2 className="app-name">Admin Dashboard</h2>
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
            src="/images/logout.png"
            alt="Logout"
            className="nav-icon"
            onClick={handleLogout}
          />
        </div>
      </div>

      <div className="forms-container">
  {/* Kacchi Bhai Form */}
  <div className="restaurant-box">
    <img
      src="/images/kacchibhai.png"
      alt="Kacchi Bhai"
      className="restaurant-logo"
    />
    <h3>Kacchi Bhai</h3>
    <form className="form">
      <input
        type="text"
        name="name"
        placeholder="Food Name"
        value={kacchiBhaiItem.name}
        onChange={(e) => handleInputChange(e, "KacchiBhai")}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={kacchiBhaiItem.price}
        onChange={(e) => handleInputChange(e, "KacchiBhai")}
      />
      <input
        type="number"
        name="calories"
        placeholder="Calories"
        value={kacchiBhaiItem.calories}
        onChange={(e) => handleInputChange(e, "KacchiBhai")}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={kacchiBhaiItem.image}
        onChange={(e) => handleInputChange(e, "KacchiBhai")}
      />
      <button
        type="button"
        onClick={handleAddKacchiBhaiItem}
      >
        Add Item
      </button>
    </form>
  </div>

  {/* Pizza Hut Form */}
  <div className="restaurant-box">
    <img
      src="/images/pizzahut.png"
      alt="Pizza Hut"
      className="restaurant-logo"
    />
    <h3>Pizza Hut</h3>
    <form className="form">
      <input
        type="text"
        name="name"
        placeholder="Food Name"
        value={pizzaHutItem.name}
        onChange={(e) => handleInputChange(e, "PizzaHut")}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={pizzaHutItem.price}
        onChange={(e) => handleInputChange(e, "PizzaHut")}
      />
      <input
        type="number"
        name="calories"
        placeholder="Calories"
        value={pizzaHutItem.calories}
        onChange={(e) => handleInputChange(e, "PizzaHut")}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={pizzaHutItem.image}
        onChange={(e) => handleInputChange(e, "PizzaHut")}
      />
      <button
        type="button"
        onClick={handleAddPizzaHutItem}
      >
        Add Item
      </button>
    </form>
  </div>
</div>
</div>
  );
};

export default Admin;
