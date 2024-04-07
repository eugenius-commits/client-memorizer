import React from 'react';
import { IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import EmailIcon from '@material-ui/icons/Email';
import ShareSocialIcon from '@material-ui/icons/Share';
import LinkIcon from '@material-ui/icons/Link';

function ShareMemoryButton({ location, notes, picture }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleShareViaEmail = () => {
    console.log('Shared via email');
    handleCloseMenu();
  };

  const handleShareOnSocialMedia = () => {
    console.log('Shared on social media');
    handleCloseMenu();
  };

  const handleGenerateShareableLink = () => {
    console.log('Generated shareable link');
    handleCloseMenu();
  };

  return (
    <>
      <IconButton
        color="primary"
        onClick={handleOpenMenu}
        style={{ marginBottom: '10px' }}
      >
        <ShareIcon />
        <Typography style={{ marginLeft: '8px' }}>Share</Typography>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleShareViaEmail}>
          <EmailIcon />
          Share via Email
        </MenuItem>
        <MenuItem onClick={handleShareOnSocialMedia}>
          <ShareSocialIcon />
          Share on Social Media
        </MenuItem>
        <MenuItem onClick={handleGenerateShareableLink}>
          <LinkIcon />
          Generate Shareable Link
        </MenuItem>
      </Menu>
    </>
  );
}

export default ShareMemoryButton;
