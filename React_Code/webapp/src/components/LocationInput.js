import React, { useState } from "react";

function LocationInput({ onSearch }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleGeolocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Unable to fetch your location.");
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!latitude || !longitude) {
      alert("Please provide your location.");
      return;
    }
    onSearch({ latitude: parseFloat(latitude), longitude: parseFloat(longitude) });
  };

  return (
    <div className="location-input">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Latitude:
            <input
              type="number"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="Enter latitude"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Longitude:
            <input
              type="number"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="Enter longitude"
              required
            />
          </label>
        </div>
        <button type="button" onClick={handleGeolocation}>
          Use My Location
        </button>
        <button type="submit">Find Mechanics</button>
      </form>
    </div>
  );
}

export default LocationInput;
