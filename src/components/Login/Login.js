import React from 'react';
import { Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Card from '../card';

import BackDrop from '../../assets/LoginImages/LoginSmoke.jpg';

const Login = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth={true}
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: '#F0F0F3',
        },
      }}>
      {/* <div> */}
      <div className={styles.loginContainer}>
        <span className={styles.Heading}>Login</span>
        <Card otherStyles={[styles.cardOverride, styles.fillWidth].join(' ')}>
          <div className={styles.seacrhComp}>
            <input
              value={''}
              onChange={(e) => {}}
              onKeyUp={() => {}}
              placeholder='Enter Email Address...'
              className={styles.inputtransparent}></input>
          </div>
        </Card>
        <Card otherStyles={[styles.cardOverride, styles.fillWidth].join(' ')}>
          <div className={styles.seacrhComp}>
            <input
              type='Password'
              value={''}
              onChange={(e) => {}}
              onKeyUp={() => {}}
              placeholder='Enter Password...'
              className={styles.inputtransparent}></input>
          </div>
        </Card>
        <Card button={true} otherStyles={styles.cardOverride}>
          <div className={styles.btnText}>Login</div>
        </Card>
        <div className={styles.forgotPass}>
          <span>Register /</span> <span>Forgot Password</span>
        </div>
      </div>
      {/* <div>
          <img src={BackDrop} alt='' />
        </div> */}
      {/* </div> */}
    </Dialog>
  );
};

Login.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Login;
