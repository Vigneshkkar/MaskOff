import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Card from '../card';

import BackDrop from '../../assets/LoginImages/LoginSmoke.jpg';
import ShowToast from '../Toast';

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const ForgotPassword = ({
  open,
  handleClose,
  onFP,
  onOpenLogin,
  TransitionComponent,
  onRegister,
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
      <div className={styles.ForgotPass}>
        {/* <div> */}
        <div className={styles.loginContainer}>
          <span className={styles.Heading}>Forgot Password</span>
          <Card otherStyles={[styles.cardOverride, styles.fillWidth].join(' ')}>
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

              onFP(email);
            }}>
            <Card button={true} otherStyles={styles.cardOverride}>
              <div className={[styles.btnText, styles.btnContent].join(' ')}>
                Reset Password
              </div>
            </Card>
          </div>
          <div className={styles.forgotPass}>
            <span onClick={onOpenLogin}>Login /</span>{' '}
            <span onClick={onRegister}>Register</span>
          </div>
        </div>
        <ShowToast msg={toast.toastMsg} type='error' open={toast.open} />
      </div>
    </Dialog>
  );
};

ForgotPassword.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onFP: PropTypes.func.isRequired,
  onOpenLogin: PropTypes.func.isRequired,
  TransitionComponent: PropTypes.object,
  onRegister: PropTypes.func.isRequired,
};

export default ForgotPassword;
