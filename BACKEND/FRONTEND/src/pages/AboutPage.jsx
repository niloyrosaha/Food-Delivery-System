import React from 'react';
import "../styles/AboutPage.css";
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <div className="about-page">
            <div className="nav-bar">
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/login')}>Log In</button>
                <button onClick={() => navigate('/signup')}>Sign Up</button>
            </div>
            <div className="about-content">
                <h1>About Food & Meal Hub</h1>
                <p>Welcome to Food & Meal Hub! We are your go-to platform for seamless food delivery and meal planning. Enjoy personalized meal plans, explore restaurants, and manage your orders effortlessly.</p>
            </div>
        </div>
    );
};

export default AboutPage;
