import React from 'react';
import { TextField } from '@material-ui/core';

function NotesInput({ notes, setNotes }) {
  return (
    <TextField
      label="Notes"
      multiline
      rows={8}
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      margin="normal"
      fullWidth
      variant="outlined" // Add variant="outlined" to use outlined style
      style={{ width: '80%' }} // Set width to 80%
    />
  );
}

export default NotesInput;