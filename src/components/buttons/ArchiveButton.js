import React from 'react';
import { IconButton , Typography } from '@material-ui/core';
import ArchiveIcon from '@material-ui/icons/Archive';

function ArchiveButton() {
  const handleArchive = () => {
    // Implement the archive functionality here
    console.log('Archived!');
  };

  return (
    <IconButton color="primary" onClick={handleArchive}>
      <ArchiveIcon />
      <Typography style={{ marginLeft: '8px' }}>Archive</Typography> 
    </IconButton>
  );
}

export default ArchiveButton;