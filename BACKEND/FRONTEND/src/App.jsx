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
import PaymentPage from "./pages/PaymentPage";

// Import Restaurant Pages
import KFC from "./pages/shops/KFC";
import Yumcha from "./pages/shops/Yumcha";
import KacchiBhai from "./pages/shops/KacchiBhai";
import SultanDines from "./pages/shops/SultanDines";
import PizzaHut from "./pages/shops/PizzaHut";
import PizzaBurg from "./pages/shops/PizzaBurg";
import TastyTreat from "./pages/shops/TastyTreat";
import Chillox from "./pages/shops/Chillox";
import McDonalds from "./pages/shops/McDonalds";

// Import Cuisine Pages
import American from "./pages/cuisines/American";
import Chinese from "./pages/cuisines/Chinese";
import Italian from "./pages/cuisines/Italian";
import PanAsian from "./pages/cuisines/PanAsian";

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
                <Route path="/cart" element={<Cart />} />
                <Route path="/ratings" element={<Ratings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/Payment" element={<PaymentPage />} />
                
                {/* Restaurant Routes */}
                <Route path="/shops/kfc" element={<KFC />} />
                <Route path="/shops/yumcha" element={<Yumcha />} />
                <Route path="/shops/kacchibhai" element={<KacchiBhai />} />
                <Route path="/shops/sultandines" element={<SultanDines />} />
                <Route path="/shops/pizzahut" element={<PizzaHut />} />
                <Route path="/shops/pizzaburg" element={<PizzaBurg />} />
                <Route path="/shops/tastytreat" element={<TastyTreat />} />
                <Route path="/shops/chillox" element={<Chillox />} />
                <Route path="/shops/mcdonalds" element={<McDonalds />} />

                {/* Cuisine Routes */}
                <Route path="/cuisines/american" element={<American />} />
                <Route path="/cuisines/chinese" element={<Chinese />} />
                <Route path="/cuisines/italian" element={<Italian />} />
                <Route path="/cuisines/panasian" element={<PanAsian />} />
            </Routes>
        </Router>
    );
};

export default App;
