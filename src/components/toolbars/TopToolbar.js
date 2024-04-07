// src/components/TopToolbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { AccountCircle, ExitToApp, PersonAdd } from '@material-ui/icons'; // Import icons

function TopToolbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MemoMinder
        </Typography>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <Button color="inherit" startIcon={<ExitToApp />}>
          Sign In
        </Button>
        <Button color="inherit" startIcon={<PersonAdd />}>
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopToolbar;
