import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function GenerateShareableLink() {
  const [shareableLink, setShareableLink] = useState('');

  const handleGenerateLink = () => {
    // Implement logic to generate shareable link
    const generatedLink = 'http://example.com/memory'; // Placeholder for generated link
    setShareableLink(generatedLink);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleGenerateLink}>Generate Shareable Link</Button>
      {shareableLink && (
        <TextField
          label="Shareable Link"
          value={shareableLink}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
      )}
    </div>
  );
}

export default GenerateShareableLink;
