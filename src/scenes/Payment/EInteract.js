/**
 * Use the CSS tab above to style your Element's container.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import Card from '../../components/card';
import styles from './index.module.scss';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Interac from '../../assets/icons/interac.png';

const InteracPayment = ({ paymentProcessing, interacPayments }) => {
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div className={styles.interacCont}>
        <div className={styles.orSeperator}> or </div>
        <div className={styles.paymentHeadings}>
          Pay through eInterac on <b> mask416off@gmail.com </b> and click on the
          button below to confirm payment.
        </div>
        <div
          onClick={() => {
            setConfirm(true);
          }}>
          <Card button={true} otherStyles={styles.cardContainer}>
            <div className={styles.ButtonCont}>
              <img src={Interac} className={styles.interacImg} />
              {!paymentProcessing ? (
                <span>Pay through Interac</span>
              ) : (
                <CircularProgress color='primary' />
              )}
            </div>
          </Card>
        </div>
      </div>
      <Dialog open={confirm}>
        <DialogTitle>Confirm Payment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Is the Payment to <b> mask416off@gmail.com </b> successful, Please
            confirm to proceed. It would take some time to process your order.
          </DialogContentText>
          <DialogActions>
            <Button
              onClick={() => {
                setConfirm(false);
                interacPayments();
              }}>
              Confirm
            </Button>
            <Button onClick={() => setConfirm(false)}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

InteracPayment.propTypes = {
  paymentProcessing: PropTypes.bool,
  interacPayments: PropTypes.func,
};
export default InteracPayment;
