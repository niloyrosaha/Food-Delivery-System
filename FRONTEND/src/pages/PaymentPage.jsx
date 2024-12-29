import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PaymentPage.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("COD"); // Default to COD
  const [isBkashPopupVisible, setBkashPopupVisible] = useState(false); // Track Bkash popup visibility

  const handlePaymentMethodChange = (e) => {
    const paymentMethod = e.target.value;
    setSelectedPaymentMethod(paymentMethod);
    if (paymentMethod === "Bkash") {
      setBkashPopupVisible(true);
    } else {
      setBkashPopupVisible(false);
    }
  };

  const handlePlaceOrder = () => {
    if (selectedPaymentMethod === "COD") {
      alert("Order placed successfully! Payment will be made on delivery.");
      navigate("/order-confirmation");
    } else if (selectedPaymentMethod === "Bkash") {
      alert("Order placed successfully using Bkash!");
      navigate("/order-confirmation");
    } else {
      alert("Invalid payment method selected.");
    }
  };

  const closeBkashPopup = () => {
    setBkashPopupVisible(false);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const goToRatings = () => {
    navigate("/ratings");
  };

  const goToNotifications = () => {
    navigate("/notifications");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="payment-page">
      {/* Navigation Bar */}
      <div className="nav-bar">
        <h2>NAME OF RESTAURANT</h2>
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
          src="/images/profile.png"
          alt="Profile"
          className="nav-icon"
          onClick={goToProfile}
        />
        <img
          src="/images/logout.png"
          alt="Logout"
          className="nav-icon"
        />
      </div>

      {/* Payment Options Section */}
      <div className="payment-options-box">
        <h2>Select Payment Method</h2>
        <div className="payment-option">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="COD"
            checked={selectedPaymentMethod === "COD"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="cod">Cash on Delivery (COD)</label>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="bkash"
            name="paymentMethod"
            value="Bkash"
            checked={selectedPaymentMethod === "Bkash"}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="bkash">Bkash Payment</label>
        </div>
      </div>

      {/* Bkash Payment Popup */}
      {isBkashPopupVisible && (
        <div className="bkash-popup">
          <div className="bkash-popup-content">
            <img
              src="/images/bkash.jpeg"
              alt="Bkash Payment Instructions"
              className="bkash-image"
            />
            <button className="close-popup" onClick={closeBkashPopup}>
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Place Order Button */}
      <button className="place-order-button" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default PaymentPage;
