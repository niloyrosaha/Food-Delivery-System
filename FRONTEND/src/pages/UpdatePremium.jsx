import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UpdatePremium.css";

const UpdatePremium = () => {
  const [foodItems, setFoodItems] = useState([]); // Food items fetched from the backend
  const [selectedItemDetails, setSelectedItemDetails] = useState({}); // To hold calculated details for each item
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPremiumFood = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/premium-food");
        if (!response.ok) throw new Error("Failed to fetch premium food");
        const data = await response.json();
        setFoodItems(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPremiumFood();
  }, []);

  const handleQuantityChange = (item, quantity) => {
    if (!quantity || quantity <= 0) return; // Handle invalid input gracefully
    const calculatedPrice = (item.pricePerGram * quantity).toFixed(2); // Calculate price
    const calculatedCalories = (item.caloriesPerGram * quantity).toFixed(2); // Calculate calories
    setSelectedItemDetails((prevDetails) => ({
      ...prevDetails,
      [item.name]: {
        name: item.name,
        calories: Number(calculatedCalories),
        price: Number(calculatedPrice),
        quantity,
      },
    }));
  };

  const handleAddToCart = (itemName) => {
    const itemDetails = selectedItemDetails[itemName];
    if (!itemDetails) {
      alert("Please enter a valid quantity for the item before adding to the cart.");
      return;
    }

    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = [...existingCart, itemDetails];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    alert(`${itemDetails.name} has been added to the cart.`);
  };

  const handleViewCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    navigate("/cart", { state: { cartItems: existingCart } });
  };

  return (
    <div className="updatePremiumPage">
      <div className="nav-bar">
        <h2>Kacchi Bhai</h2>
        <div className="nav-icons">
          <img
            src="/images/cart.png"
            alt="Cart"
            className="nav-icon"
            onClick={handleViewCart}
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
            src="/images/profile.png"
            alt="Profile"
            className="nav-icon"
            onClick={() => navigate("/profile")}
          />
        </div>
      </div>
      <h2>Update Premium Foods</h2>
      <div className="premiumFoodItems">
        {foodItems.map((item) => (
          <div key={item.name} className="premiumFoodItem">
            <img
              src={item.image}
              alt={item.name}
              className="premiumFoodImage"
            />
            <h3>{item.name}</h3>
            <p>Price per gram: ${item.pricePerGram}</p>
            <p>Calories per gram: {item.caloriesPerGram} kcal</p>
            <div className="quantity-control">
              <input
                type="number"
                min="1"
                placeholder="Enter grams"
                onChange={(e) =>
                  handleQuantityChange(item, Number(e.target.value))
                }
              />
              <button onClick={() => handleAddToCart(item.name)}>
                Add to Cart
              </button>
            </div>
            {selectedItemDetails[item.name] && (
              <div className="calculatedDetails">
                <h4>Selected Item Details:</h4>
                <p>Item: {selectedItemDetails[item.name].name}</p>
                <p>Quantity: {selectedItemDetails[item.name].quantity} grams</p>
                <p>Calories: {selectedItemDetails[item.name].calories} kcal</p>
                <p>Price: ${selectedItemDetails[item.name].price}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatePremium;
