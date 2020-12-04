import React from 'react';
import PropTypes from 'prop-types';
import PayButton from './PaymentButton';
import PayCard from './CardPayment';
import styles from './index.module.scss';
import Address from './Address';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import Card from '../../components/card';
import { CircularProgress } from '@material-ui/core';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import InteracPayment from './EInteract';

const PaymentScreen = ({
  total,
  email,
  loading,
  initiatePayment,
  addressData,
  setAddress,
  paymentProcessing,
  confirmGPay,
  interacPayment,
}) => {
  const elements = useElements();
  const stripe = useStripe();

  return (
    <>
      <div className={styles.containerWhole}>
        {!loading ? (
          <>
            <div className={styles.Container}>
              <div className={styles.paymentHeadings}>
                Total Cart Value: $ {total} CAD
              </div>
              {total ? (
                <PayButton confirmGPay={confirmGPay} total={total} />
              ) : null}
              <Address
                email={email}
                address={addressData}
                setAddress={setAddress}
              />
              <PayCard />
            </div>
            <div
              onClick={() => {
                if (!paymentProcessing)
                  initiatePayment(elements.getElement(CardElement), stripe);
              }}>
              <Card button={true} otherStyles={styles.cardContainer}>
                <div className={styles.ButtonCont}>
                  <PaymentRoundedIcon color='primary' />
                  {!paymentProcessing ? (
                    <span>Pay</span>
                  ) : (
                    <CircularProgress color='primary' />
                  )}
                </div>
              </Card>
            </div>
            <div className={styles.Container}>
              <InteracPayment
                interacPayments={interacPayment}
                paymentProcessing={paymentProcessing}
              />
            </div>
          </>
        ) : (
          <CircularProgress color='secondary' />
        )}
      </div>
    </>
  );
};
PaymentScreen.propTypes = {
  total: PropTypes.number.isRequired,
  email: PropTypes.string,
  loading: PropTypes.bool,
  initiatePayment: PropTypes.func.isRequired,
  addressData: PropTypes.object.isRequired,
  setAddress: PropTypes.func.isRequired,
  paymentProcessing: PropTypes.bool,
  confirmGPay: PropTypes.func.isRequired,
  interacPayment: PropTypes.func.isRequired,
};
export default PaymentScreen;
