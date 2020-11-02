import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InitialLogin from './Login';
import Register from './Register';
import ForgotPass from './ForgotPassword';

import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const onLogin = (email, password) => {
  console.log(email, password);
};

const onRegister = (email, password) => {
  console.log(email, password);
};

const onFP = (email, password) => {
  console.log(email, password);
};

const Login = ({ open, handleClose, openLoginSetter }) => {
  const [openReg, setOpenReg] = useState(false);
  const [openFP, setFP] = useState(false);

  const onCloseRegister = () => {
    setOpenReg(false);
  };
  const onCloseFP = () => {
    setFP(false);
  };
  const onOpenReg = () => {
    handleClose();
    onCloseFP();
    setTimeout(() => {
      setOpenReg(true);
    }, 300);
  };
  const onOpenFP = () => {
    handleClose();
    onCloseRegister();
    setTimeout(() => {
      setFP(true);
    }, 300);
  };
  const onOpenLogin = () => {
    onCloseRegister();
    onCloseFP();
    setTimeout(() => {
      openLoginSetter();
    }, 300);
  };
  return (
    <>
      <InitialLogin
        onLogin={onLogin}
        open={open}
        handleClose={handleClose}
        onOpenReg={onOpenReg}
        TransitionComponent={Transition}
        onOpenFP={onOpenFP}
      />
      <Register
        open={openReg}
        handleClose={onCloseRegister}
        onRegister={onRegister}
        onOpenLogin={onOpenLogin}
        onOpenFP={onOpenFP}
        TransitionComponent={Transition}
      />
      <ForgotPass
        open={openFP}
        handleClose={onCloseFP}
        onFP={onFP}
        onOpenLogin={onOpenLogin}
        TransitionComponent={Transition}
        onRegister={onOpenReg}
      />
    </>
  );
};

Login.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  openLoginSetter: PropTypes.func,
};

export default Login;
