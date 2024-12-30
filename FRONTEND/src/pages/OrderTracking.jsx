import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "leaflet/dist/leaflet.css";
import "../styles/OrderTracking.css";

const OrderTrackingPage = () => {
  const [riderLocation, setRiderLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const goToOrder = () => {
    navigate("/order");
  };

  // Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching user location:", error);
      }
    );
  }, []);

  // Fetch rider's location periodically
  useEffect(() => {
    const fetchRiderLocation = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/location");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRiderLocation(data);
      } catch (error) {
        console.error("Failed to fetch rider location:", error);
      }
    };

    // Fetch location initially and then set an interval
    fetchRiderLocation();
    const interval = setInterval(fetchRiderLocation, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  if (!riderLocation || !userLocation) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="order-tracking-page">
      <h1>Order Tracking</h1>
      <MapContainer
        center={[userLocation.latitude, userLocation.longitude]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[userLocation.latitude, userLocation.longitude]}>
          <Popup>Your Location</Popup>
        </Marker>
        <Marker position={[riderLocation.latitude, riderLocation.longitude]}>
          <Popup>Rider's Location</Popup>
        </Marker>
      </MapContainer>
      <button className="back-to-order-button" onClick={goToOrder}>
        Back to Home
      </button>
    </div>
  );
};

export default OrderTrackingPage;
