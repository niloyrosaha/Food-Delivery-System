import React, { useState } from 'react';
import "../styles/LoginPage.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', email, password);
    };

    return (
        <div className="login-page">
            <div className="nav-bar">
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