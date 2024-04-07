// src/App.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

test('App renders correctly', () => {
  const { getByText, getByLabelText } = render(<App />);
  const appTitle = getByText('Memorizer App');
  const locationInput = getByLabelText('Location');
  const notesInput = getByLabelText('Notes');
  const pictureInput = getByLabelText('Picture URL');
  const checkInButton = getByText('Check In');

  expect(appTitle).toBeInTheDocument();
  expect(locationInput).toBeInTheDocument();
  expect(notesInput).toBeInTheDocument();
  expect(pictureInput).toBeInTheDocument();
  expect(checkInButton).toBeInTheDocument();
});

test('App updates input values correctly', () => {
  const { getByLabelText } = render(<App />);
  const locationInput = getByLabelText('Location');
  const notesInput = getByLabelText('Notes');
  const pictureInput = getByLabelText('Picture URL');

  fireEvent.change(locationInput, { target: { value: 'New Location' } });
  fireEvent.change(notesInput, { target: { value: 'New Notes' } });
  fireEvent.change(pictureInput, { target: { value: 'New Picture URL' } });

  expect(locationInput.value).toBe('New Location');
  expect(notesInput.value).toBe('New Notes');
  expect(pictureInput.value).toBe('New Picture URL');
});

test('App checks in correctly on button click', async () => {
  axios.post.mockResolvedValueOnce({ data: { message: 'Check-in successful!' } });

  const { getByLabelText, getByText } = render(<App />);
  const locationInput = getByLabelText('Location');
  const notesInput = getByLabelText('Notes');
  const pictureInput = getByLabelText('Picture URL');
  const checkInButton = getByText('Check In');

  fireEvent.change(locationInput, { target: { value: 'Test Location' } });
  fireEvent.change(notesInput, { target: { value: 'Test Notes' } });
  fireEvent.change(pictureInput, { target: { value: 'Test Picture' } });

  fireEvent.click(checkInButton);

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/checkin', {
      location: 'Test Location',
      notes: 'Test Notes',
      picture: 'Test Picture',
    });
  });
});
