import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab'; // Import Rating from @material-ui/lab

function RatingInput({ rating, setRating }) {
  const [value, setValue] = useState(rating);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (setRating) {
      setRating(newValue);
    }
  };

  return (
    <>
      <Rating
        name="rating"
        value={value}
        precision={0.5}
        onChange={handleChange}
      />
    </>
  );
}

export default RatingInput;
