import React, { useState } from 'react';
import "../styles/SignUpPage.css";
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        location: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Sign-up successful!");
                navigate("/login");
            } else {
                alert(data.message || "Sign-up failed");
            }
        } catch (error) {
            console.error("Error during sign-up:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="signup-page">
            <div className="nav-bar">
                <h2 className="restaurant-name">MyRestaurant</h2>
                <div className="nav-buttons">
                    <button onClick={() => navigate('/')}>Home</button>
                    <button onClick={() => navigate('/login')}>Log In</button>
                    <button onClick={() => navigate('/about')}>About Us</button>
                </div>
            </div>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
