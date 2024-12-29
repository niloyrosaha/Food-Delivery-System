import { useState } from 'react';
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
      setSuccessMessage(response.data.message);
      localStorage.setItem('token', response.data.token); // Store the JWT in localStorage
      setEmail('');
      setPassword('');
      
      // Redirect to the OrderPage after successful login
      navigate('/order'); // Make sure '/order' is the correct route for your OrderPage
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Something went wrong');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
