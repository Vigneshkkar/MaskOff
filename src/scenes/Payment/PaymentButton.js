import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useStripe,
  PaymentRequestButtonElement,
} from '@stripe/react-stripe-js';
import styles from './index.module.scss';

const useOptions = (paymentRequest) => {
  const options = useMemo(
    () => ({
      paymentRequest,
      style: {
        paymentRequestButton: {
          theme: 'dark',
          height: '48px',
          // type: 'pay',
        },
      },
    }),
    [paymentRequest]
  );

  return options;
};

const usePaymentRequest = ({ options, onPaymentMethod }) => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    if (stripe && paymentRequest === null) {
      const pr = stripe.paymentRequest(options);
      setPaymentRequest(pr);
    }
  }, [stripe, options, paymentRequest]);

  useEffect(() => {
    let subscribed = true;
    if (paymentRequest) {
      paymentRequest.canMakePayment().then((res) => {
        if (res && subscribed) {
          setCanMakePayment(true);
        }
      });
    }

    return () => {
      subscribed = false;
    };
  }, [paymentRequest]);

  useEffect(() => {
    if (paymentRequest) {
      paymentRequest.on('paymentmethod', onPaymentMethod);
    }
    return () => {
      if (paymentRequest) {
        paymentRequest.off('paymentmethod', onPaymentMethod);
      }
    };
  }, [paymentRequest, onPaymentMethod]);

  return canMakePayment ? paymentRequest : null;
};

const PaymentRequestForm = (props) => {
  const stripe = useStripe();

  const paymentRequest = usePaymentRequest({
    options: {
      country: 'CA',
      currency: 'cad',
      total: {
        label: 'Total',
        amount: props.total * 100,
      },
      requestPayerName: true,
      requestPayerEmail: true,
      requestPayerPhone: true,
      requestShipping: true,
      shippingOptions: [
        {
          id: 'basic',
          label: 'Free Home shipping',
          detail: 'Package will be shipped to the address mentioned.',
          amount: 0,
        },
      ],
    },
    onPaymentMethod: ({ complete, paymentMethod, ...data }) => {
      props.confirmGPay(paymentMethod, data, complete, stripe);
    },
  });
  const options = useOptions(paymentRequest);

  if (!paymentRequest) {
    return null;
  }

  return (
    <div>
      <div className={styles.paymentHeadings}> Quick Pay: </div>
      <PaymentRequestButtonElement
        className='PaymentRequestButton'
        options={options}
        onReady={() => {
          // console.log('PaymentRequestButton [ready]');
        }}
        onClick={(event) => {
          // console.log('PaymentRequestButton [click]', event);
        }}
        onBlur={() => {
          // console.log('PaymentRequestButton [blur]');
        }}
        onFocus={() => {
          // console.log('PaymentRequestButton [focus]');
        }}
      />
      <div className={styles.orSeperator}> or </div>
    </div>
  );
};

PaymentRequestForm.propTypes = {
  total: PropTypes.number.isRequired,
  confirmGPay: PropTypes.func.isRequired,
};
export default PaymentRequestForm;
