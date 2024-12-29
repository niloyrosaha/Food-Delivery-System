import React, { useState } from 'react';
import "../styles/SignupPage.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    type: '', // Add type field
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Validation for required fields (including address and type)
    if (!userData.name || !userData.email || !userData.password || !userData.address || !userData.type) {
      alert("All fields are required!");
      return;
    }

    setLoading(true);

    try {
      // Sending data to the backend
      const { data } = await axios.post('http://localhost:5000/api/auth/signup', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        address: userData.address,
        type: userData.type,
      });

      console.log("Signup successful:", data);
      alert("Account created successfully. Please log in.");
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      console.error("Signup error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="nav-bar">
        <h2 className="restaurant-name">Foodie</h2>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/login')}>Log In</button>
        <button onClick={() => navigate('/about')}>About Us</button>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
          required
          placeholder="Enter your address"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="Confirm your password"
        />
        <label>Account Type:</label>
        <select
          name="type"
          value={userData.type}
          onChange={handleChange}
          required
        >
          <option value="">Select type</option>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        
        {/* Updated Button as per the provided format */}
        <button type="submit">
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
