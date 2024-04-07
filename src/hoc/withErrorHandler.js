
import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const withErrorHandler = (WrappedComponent) => {
  const WithErrorHandler = (props) => {
    const [error, setError] = useState(null);

    const handleErrorClose = () => {
      setError(null);
    };

    return (
      <>
        <WrappedComponent {...props} showError={setError} />
        <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleErrorClose}>
          <Alert onClose={handleErrorClose} severity="error">
            {error}
          </Alert>
        </Snackbar>
      </>
    );
  };

  return WithErrorHandler;
};

export default withErrorHandler;