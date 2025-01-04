import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/LoginPage.css";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const user = response.data.user; // Extract the user object from the response
      setSuccessMessage(response.data.message);
      
      // Save user ID and token in localStorage
      localStorage.setItem("userId", user.id);
      localStorage.setItem("token", response.data.token);
      
      setEmail('');
      setPassword('');
      
      // Redirect based on user type
      if (user.type === 'admin') {
        navigate('/admin'); // Redirect to the admin page for admin users
      } else {
        navigate('/order'); // Redirect to the OrderPage for non-admin users
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Something went wrong');
    }
  };

  return (
    <div>
        <div className="nav-bar">
        <h2 className="restaurant-name">Foodie</h2>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
        <button onClick={() => navigate('/about')}>About Us</button>
      </div>
      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
