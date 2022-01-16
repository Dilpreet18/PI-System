import React from 'react';
import ReactDOM from 'react-dom';
import { SnackbarProvider, useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

export const RenderMessage = ({ message, variant }) => {
  const { enqueueSnackbar } = useSnackbar();
  enqueueSnackbar(message, { variant });
  return null;
};

RenderMessage.propTypes = {
  variant: PropTypes.oneOf(['default', 'error', 'info', 'success', 'warning']),
  message: PropTypes.string.isRequired,
};

export const snackbar = (message, variant) => {
  ReactDOM.render(
    <SnackbarProvider>
      <RenderMessage message={message} variant={variant} />
    </SnackbarProvider>,
    document.getElementById('snackbar')
  );
};

export default snackbar;
