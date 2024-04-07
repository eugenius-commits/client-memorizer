import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function ShareViaEmail() {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleShareViaEmail = () => {
    // Implement logic to send email
    console.log('Sharing via email:', recipient, message);
    // Clear form fields
    setRecipient('');
    setMessage('');
  };

  return (
    <div>
      <TextField
        label="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        fullWidth
      />
      <TextField
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={4}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleShareViaEmail}>Share via Email</Button>
    </div>
  );
}

export default ShareViaEmail;
