import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons'; // Import the LocationOn icon
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '200px',
  marginBottom: '10px',
};

const center = {
  lat: 0,
  lng: 0,
};

function LocationInput({ location, setLocation }) {
  const [error, setError] = useState(null); // State to track geolocation errors
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setError(null); // Clear any previous errors
        },
        (error) => {
          setError(error.message); // Set error state
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.'); // Set error state
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleLocate}>
        <LocationOn />
      </IconButton>
      {!error && location && ( // Conditionally render GoogleMap if no error and location is selected
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={4}
            center={center}
            onClick={(e) => setLocation(e.latLng.toJSON())}
          >
            {location && <Marker position={location} />}
          </GoogleMap>
        </LoadScript>
      )}
      {error && <p>Error: {error}</p>} {/* Display error message if there's an error */}
      <TextField
        label="Location"
        value={location ? `Latitude: ${location.lat}, Longitude: ${location.lng}` : ''}
        margin="normal"
        fullWidth
        disabled
      />
    </div>
  );
}

export default LocationInput;
