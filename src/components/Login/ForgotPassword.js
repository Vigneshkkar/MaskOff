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

const ForgotPassword = ({
  open,
  handleClose,
  onFP,
  onOpenLogin,
  TransitionComponent,
  onRegister,
  loading,
  forgotPasscodeSent,
  onChangePassword,
}) => {
  const [email, setEmail] = useState('');
  const [passcode, setpasscode] = useState('');
  const [resetPass, setresetPass] = useState('');
  const [confirmPass, setconfirmPass] = useState('');
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
        !forgotPasscodeSent ? (
          <div className={styles.ForgotPass}>
            <div className={styles.loginContainer}>
              <span className={styles.Heading}>Forgot Password</span>
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
                  onFP(email);
                }}>
                <Card button={true} otherStyles={styles.cardOverride}>
                  <div
                    className={[styles.btnText, styles.btnContent].join(' ')}>
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
        ) : (
          <div className={styles.ForgotPass}>
            <div className={styles.loginContainer}>
              <span className={styles.Heading}>Change Password</span>
              <Card
                otherStyles={[styles.cardOverride, styles.fillWidth].join(' ')}>
                <div className={styles.seacrhComp}>
                  <input
                    value={passcode}
                    onChange={(e) => {
                      setpasscode(e.target.value);
                    }}
                    onKeyUp={(e) => {
                      setpasscode(e.target.value);
                    }}
                    placeholder='Enter OTP from Mail...'
                    className={styles.inputtransparent}></input>
                </div>
              </Card>
              <Card
                otherStyles={[styles.cardOverride, styles.fillWidth].join(' ')}>
                <div className={styles.seacrhComp}>
                  <input
                    value={resetPass}
                    onChange={(e) => {
                      setresetPass(e.target.value);
                    }}
                    onKeyUp={(e) => {
                      setresetPass(e.target.value);
                    }}
                    placeholder='New Password...'
                    className={styles.inputtransparent}></input>
                </div>
              </Card>
              <Card
                otherStyles={[styles.cardOverride, styles.fillWidth].join(' ')}>
                <div className={styles.seacrhComp}>
                  <input
                    value={confirmPass}
                    onChange={(e) => {
                      setconfirmPass(e.target.value);
                    }}
                    onKeyUp={(e) => {
                      setconfirmPass(e.target.value);
                    }}
                    type='Password'
                    placeholder='Confirm Password...'
                    className={styles.inputtransparent}></input>
                </div>
              </Card>
              <div
                className={styles.btnText}
                onClick={() => {
                  if (!passcode || passcode.length < 6) {
                    setToast({
                      open: true,
                      toastMsg:
                        'Invalid Passcode. Please enter correct passcode.',
                    });
                    setTimeout(() => {
                      setToast({
                        open: false,
                        toastMsg: '',
                      });
                    }, 4000);
                    return;
                  }
                  if (resetPass !== confirmPass) {
                    setToast({
                      open: true,
                      toastMsg:
                        'Password Not Matching. Enter same Password on confirm password field.',
                    });
                    setTimeout(() => {
                      setToast({
                        open: false,
                        toastMsg: '',
                      });
                    }, 4000);
                    return;
                  }
                  onChangePassword(passcode, resetPass);
                }}>
                <Card button={true} otherStyles={styles.cardOverride}>
                  <div
                    className={[
                      styles.btnText,
                      styles.btnContent,
                      styles.btnTextSmall,
                    ].join(' ')}>
                    Change Password
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
        )
      ) : (
        <div className={styles.loadingFormat}>
          <CircularProgress color='secondary' />
        </div>
      )}
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
  loading: PropTypes.bool.isRequired,
  forgotPasscodeSent: PropTypes.bool.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

export default ForgotPassword;
