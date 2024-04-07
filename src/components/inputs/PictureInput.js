// src/components/PictureInput.js
import React, { useState } from 'react';
import { IconButton, Avatar } from '@material-ui/core';
import { AddPhotoAlternate } from '@material-ui/icons'; // Import the AddPhotoAlternate icon

function PictureInput({ setPicture }) {
  const [preview, setPreview] = useState(null); // State to store preview image

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    setPicture(file); // Set the selected picture
    setPreview(URL.createObjectURL(file)); // Create a preview URL for the selected picture
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        id="picture-upload"
        style={{ display: 'none' }}
        onChange={handlePictureUpload}
      />
      <label htmlFor="picture-upload">
        <IconButton color="primary" component="span">
          <AddPhotoAlternate />
        </IconButton>
      </label>
      {preview && <Avatar alt="Preview" src={preview} style={{ width: '200px', height: '200px' }} />} {/* Display preview if available */}
    </div>
  );
}

export default PictureInput;
