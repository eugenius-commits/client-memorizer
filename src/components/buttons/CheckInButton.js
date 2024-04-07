import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check'; // Import the Check icon
import axios from 'axios';

function CheckInButton({ location, notes, picture }) {
  const handleCheckIn = () => {
    axios.post('http://localhost:5000/checkin', { location, notes, picture })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('Error during check-in:', error.response.data.error || error.message);
      });
  };

  return (
    <IconButton
      color="primary"
      onClick={handleCheckIn}
      style={{ marginBottom: '10px' }} // Add inline style
    >
      <CheckIcon /> {/* Render the Check icon */}
      <Typography style={{ marginLeft: '8px' }}>Check In</Typography> {/* Label text */}
    </IconButton>
  );
}

export default CheckInButton;
