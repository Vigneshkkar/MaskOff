import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const ShowToast = ({ handleClose, msg, open, type }) => {
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={SlideTransition}>
      <Alert variant='filled' severity={type}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

ShowToast.propTypes = {
  handleClose: PropTypes.func,
  msg: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default ShowToast;
