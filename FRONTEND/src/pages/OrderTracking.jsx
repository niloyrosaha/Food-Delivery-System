import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/OrderTracking.css";

const OrderTrackingPage = () => {
  const [riderLocation, setRiderLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });

    // Fetch rider's location
    const fetchRiderLocation = async () => {
      try {
        const response = await fetch("/api/location");
        const data = await response.json();
        setRiderLocation(data);
      } catch (error) {
        console.error("Failed to fetch rider location:", error);
      }
    };

    fetchRiderLocation();
    const interval = setInterval(fetchRiderLocation, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
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
    </div>
  );
};

export default OrderTrackingPage;
