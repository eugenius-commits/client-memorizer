import React, { useState } from 'react';
import LocationInput from './components/inputs/LocationInput';
import PictureInput from './components/inputs/PictureInput';
import NotesInput from './components/inputs/NotesInput';
import RatingInput from './components/inputs/RatingInput';
import PaginationInput from './components/inputs/PaginationInput';
import CheckInButton from './components/buttons/CheckInButton';
import ShareMemoryButton from './components/buttons/ShareMemoryButton';
import ArchiveButton from './components/buttons/ArchiveButton';
import CheckOutButton from './components/buttons/CheckOutButton'; // Import the CheckOutButton component
import TopToolbar from './components/toolbars/TopToolbar';
import { Container } from '@material-ui/core';

function App() {
  const [location, setLocation] = useState(null);
  const [notes, setNotes] = useState('');
  const [picture, setPicture] = useState(null);
  const [rating, setRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); 

  const handleCheckOut = () => {
    // Implement the logic to release the screen and delete the record
    console.log('Checked out and released screen!');
    // Reset the state or perform any cleanup actions
    setLocation(null);
    setNotes('');
    setPicture(null);
    setRating(0);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch data for the new page
  };

  return (
    <>
      <TopToolbar />
      <Container maxWidth="sm">
        <LocationInput location={location} setLocation={setLocation} />
        <PictureInput picture={picture} setPicture={setPicture} />
        <RatingInput rating={rating} setRating={setRating} />
        <NotesInput notes={notes} setNotes={setNotes} />
        <CheckInButton location={location} notes={notes} picture={picture} />
        <ShareMemoryButton location={location} notes={notes} picture={picture} />
        {/* <ArchiveButton /> */}
        <CheckOutButton onCheckOut={handleCheckOut} /> {/* Pass the handleCheckOut function */}
        <PaginationInput
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Container>
    </>
  );
}

export default App;
