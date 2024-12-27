import React, { useState } from 'react';
import "../styles/LoginPage.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import OrderPage from './OrderPage';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, { email, password });
            console.log("Login successful:", data);
            localStorage.setItem("userInfo", JSON.stringify(data)); // Store user info
            navigate('/orderpage'); // Redirect to OrderPage
        } catch (error) {
            console.error("Error logging in:", error.response?.data?.message || error.message);
            alert(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="login-page">
            <div className="nav-bar">
                <h2 className="restaurant-name">Foodie</h2>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/signup')}>Sign Up</button>
                <button onClick={() => navigate('/about')}>About Us</button>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginPage;
