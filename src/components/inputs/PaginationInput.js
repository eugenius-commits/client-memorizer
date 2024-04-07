import React from 'react';
import { Pagination } from '@material-ui/lab';

function PaginationInput({ currentPage, totalPages, onPageChange }) {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
      color="primary"
    />
  );
}

export default PaginationInput;
