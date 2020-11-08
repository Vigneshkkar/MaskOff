import React, { useState } from 'react';
import { CircularProgress, Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Card from '../card';

import BackDrop from '../../assets/LoginImages/LoginSmoke.jpg';
import ShowToast from '../Toast';

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Login = ({
  open,
  handleClose,
  onLogin,
  onOpenReg,
  TransitionComponent,
  onOpenFP,
  loading,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState({ open: false, toastMsg: '' });

  return (
    <Dialog
      fullWidth={true}
      open={open}
      TransitionComponent={TransitionComponent}
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: '#F0F0F3',
        },
      }}>
      {!loading ? (
        <div className={styles.imageHolder}>
          {/* <div> */}
          <div className={styles.loginContainer}>
            <span className={styles.Heading}>Login</span>
            <Card
              otherStyles={[styles.cardOverride, styles.fillWidth].join(' ')}>
              <div className={styles.seacrhComp}>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onKeyUp={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder='Email Address...'
                  className={styles.inputtransparent}></input>
              </div>
            </Card>
            <Card
              otherStyles={[styles.cardOverride, styles.fillWidth].join(' ')}>
              <div className={styles.seacrhComp}>
                <input
                  type='Password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  onKeyUp={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder='Password...'
                  className={styles.inputtransparent}></input>
              </div>
            </Card>
            <div
              className={styles.btnText}
              onClick={() => {
                if (!validateEmail(email)) {
                  setToast({
                    open: true,
                    toastMsg: 'Enter Vaild Email Address',
                  });
                  setTimeout(() => {
                    setToast({
                      open: false,
                      toastMsg: '',
                    });
                  }, 2000);
                  return;
                }
                if (password.length < 6) {
                  setToast({
                    open: true,
                    toastMsg: 'Password should be atleast 5 characters long.',
                  });
                  setTimeout(() => {
                    setToast({
                      open: false,
                      toastMsg: '',
                    });
                  }, 2000);
                  return;
                }

                onLogin(email, password);
              }}>
              <Card button={true} otherStyles={styles.cardOverride}>
                <div className={[styles.btnText, styles.btnContent].join(' ')}>
                  Login
                </div>
              </Card>
            </div>
            <div className={styles.forgotPass}>
              <span onClick={onOpenReg}>Register /</span>{' '}
              <span onClick={onOpenFP}>Forgot Password</span>
            </div>
          </div>
          <ShowToast msg={toast.toastMsg} type='error' open={toast.open} />
        </div>
      ) : (
        <div className={styles.loadingFormat}>
          <CircularProgress color='secondary' />
        </div>
      )}
    </Dialog>
  );
};

Login.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onOpenReg: PropTypes.func.isRequired,
  TransitionComponent: PropTypes.object,
  onOpenFP: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Login;
