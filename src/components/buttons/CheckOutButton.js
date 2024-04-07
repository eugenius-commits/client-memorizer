// components/CheckOutButton.js

import React from 'react';
import { IconButton, Snackbar, Button, Typography } from '@material-ui/core';
import { PowerSettingsNew } from '@material-ui/icons'; // Import the ExitToApp icon

function CheckOutButton({ onCheckOut }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCheckOut = () => {
    setOpen(true);
    if (onCheckOut) {
      onCheckOut();
    }
  };

  return (
    <>
      <IconButton color="primary" onClick={handleCheckOut}>
        <PowerSettingsNew />
        <Typography style={{ marginLeft: '8px' }}>Check Out</Typography> 
      </IconButton>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="You have successfully checked out."
        action={
          <Button color="secondary" size="small" onClick={handleClose}>
            Close
          </Button>
        }
      />
    </>
  );
}

export default CheckOutButton;
