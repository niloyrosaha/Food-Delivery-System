import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminPage.css";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="admin-page">
      <div className="nav-bar">
        <h2 className="restaurant-name">Admin Dashboard</h2>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="admin-content">
        <h1>Welcome, Admin!</h1>
        <p>Here are your administrative options:</p>
        <div className="admin-actions">
          <button onClick={() => navigate("/admin/add-item")}>
            Add New Item
          </button>
          <button onClick={() => navigate("/admin/update-item")}>
            Update Existing Items
          </button>
          <button onClick={() => navigate("/admin/view-orders")}>
            View Orders
          </button>
          <button onClick={() => navigate("/admin/view-revenue")}>
            View Revenue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
