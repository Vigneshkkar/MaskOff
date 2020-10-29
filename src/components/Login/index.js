import React from 'react';
import PropTypes from 'prop-types';
import InitialLogin from './Login';

const Login = ({ open, handleClose }) => {
  return <InitialLogin open={open} handleClose={handleClose} />;
};

Login.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Login;
