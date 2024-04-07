import React from 'react';
import { Button } from '@material-ui/core';

function ShareViaSocialMedia() {
  const handleShareViaSocialMedia = (platform) => {
    // Implement logic to share via social media
    console.log('Sharing via', platform);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleShareViaSocialMedia('Facebook')}>Share on Facebook</Button>
      <Button variant="contained" color="primary" onClick={() => handleShareViaSocialMedia('Twitter')}>Share on Twitter</Button>
      {/* Add buttons for other social media platforms */}
    </div>
  );
}

export default ShareViaSocialMedia;
