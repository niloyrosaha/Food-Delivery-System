import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';
import OrderPage from './pages/OrderPage';
import GroceryPage from './pages/GroceryPage';
import FoodDelivery from "./pages/FoodDelivery";
import UpdatePremium from "./pages/UpdatePremium";
import Cart from "./pages/Cart";
import Ratings from "./pages/Ratings";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

//import  from "./pages/";

//<Route path="/" element={< />} />

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/grocery" element={<GroceryPage />} />
                <Route path="/food-delivery" element={<FoodDelivery />} />
                <Route path="/update-premium" element={<UpdatePremium />} />
                <Route path="/cart" element={< Cart/>} />
                <Route path="/ratings" element={<Ratings />} />
                <Route path="/profile" element={< Profile/>} />
                <Route path="/notifications" element={<Notifications />} />
            </Routes>
        </Router>
    );
};

export default App;