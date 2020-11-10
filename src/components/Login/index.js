import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InitialLogin from './Login';
import Register from './Register';
import ForgotPass from './ForgotPassword';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../redux/actions/Login.action';

import Slide from '@material-ui/core/Slide';
import ShowToast from '../Toast';
import { setUserLogged } from '../../util/cookieHandler';
import { useCookies } from 'react-cookie';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const openToast = (setToast, msg) => {
  setToast({
    open: true,
    toastMsg: msg,
  });
  setTimeout(() => {
    setToast({
      open: false,
      toastMsg: '',
    });
  }, 4000);
};

const Login = (props) => {
  const [cookies, setCookie] = useCookies();
  const { open, handleClose, openLoginSetter } = props;
  const [openReg, setOpenReg] = useState(false);
  const [openFP, setFP] = useState(false);
  const [toast, setToast] = useState({ open: false, toastMsg: '' });

  useEffect(() => {
    if (props.err !== null) {
      openToast(setToast, props.err);
    }
  }, [props.err]);
  useEffect(() => {
    if (props.data !== null) {
      setUserLogged(props.data, setCookie);
      onCloseRegister();
      onCloseFP();
      handleClose();
    }
  }, [props.data]);

  const onRegister = useCallback(
    (email, password) => {
      props.actions.registerUser({ userEmail: email, data: btoa(password) });
    },
    [props.action]
  );
  const onLogin = useCallback(
    (email, password) => {
      props.actions.validateUser({
        userEmail: email,
        data: btoa(password),
      });
    },
    [props.action]
  );

  const onChangePass = useCallback(
    (passcode, password) => {
      props.actions.changePassword({
        userEmail: props.forgotEmail,
        newdata: btoa(password),
        passcode: passcode,
      });
    },
    [props.action, props.forgotEmail]
  );
  const onFP = useCallback(
    (email) => {
      props.actions.forgotPassword({ userEmail: email });
    },
    [props.action]
  );
  const onCloseRegister = () => {
    setOpenReg(false);
  };
  const onCloseFP = () => {
    setFP(false);
  };
  const onOpenReg = () => {
    props.actions.resetLogin();
    handleClose();
    onCloseFP();
    setTimeout(() => {
      setOpenReg(true);
    }, 300);
  };
  const onOpenFP = () => {
    props.actions.resetLogin();
    handleClose();
    onCloseRegister();
    setTimeout(() => {
      setFP(true);
    }, 300);
  };
  const onOpenLogin = () => {
    props.actions.resetLogin();
    onCloseRegister();
    onCloseFP();
    setTimeout(() => {
      openLoginSetter();
    }, 300);
  };
  return (
    <>
      <>
        <InitialLogin
          onLogin={onLogin}
          open={open}
          handleClose={handleClose}
          onOpenReg={onOpenReg}
          TransitionComponent={Transition}
          onOpenFP={onOpenFP}
          loading={props.loading}
        />
        <Register
          open={openReg}
          handleClose={onCloseRegister}
          onRegister={onRegister}
          onOpenLogin={onOpenLogin}
          onOpenFP={onOpenFP}
          TransitionComponent={Transition}
          loading={props.loading}
        />
        <ForgotPass
          open={openFP}
          handleClose={onCloseFP}
          onFP={onFP}
          onOpenLogin={onOpenLogin}
          TransitionComponent={Transition}
          onRegister={onOpenReg}
          loading={props.loading}
          forgotPasscodeSent={props.forgotPassCode}
          onChangePassword={onChangePass}
        />
        <ShowToast msg={toast.toastMsg} type='error' open={toast.open} />
      </>
    </>
  );
};

Login.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  openLoginSetter: PropTypes.func,
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...Actions }, dispatch),
});

const mapStateToProps = (state) => ({
  data: state.Login.data,
  loading: state.Login.loading,
  err: state.Login.error,
  forgotPassCode: state.Login.forgotPassCode,
  forgotEmail: state.Login.forgotEmail,
});

export default connect(mapStateToProps, mapDispatchtoProps)(Login);
