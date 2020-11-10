import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentScreen from './PaymentScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  mapCartToProducts,
  getCartItems,
  getTotalAmount,
} from '../../redux/selections/Cart.selections';
import { useCookies } from 'react-cookie';
// import { useHistory } from 'react-router-dom';
import * as PaymentActions from '../../redux/actions/Payment.actions';
import * as CartActions from '../../redux/actions/Cart.actions';

import { useHistory } from 'react-router-dom';
import ShowToast from '../../components/Toast';

const stripePromise = loadStripe(
  'pk_test_51HkEHuD8I6te4OUJPkmMfqidVVnpX1APVw61oFcqvJQx02q8PZ6u2pfgX6ddBDObhxTswvIJKBYD4RuuyZp8p71c00FEjHvG2l'
);
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
const Payment = (props) => {
  const [cookies, setCookie, removeCookies] = useCookies();
  const history = useHistory();

  const [address, setAddress] = useState({
    email: cookies.UserEmail,
    name: null,
    addressLine: null,
    zipCode: null,
    phonenumber: null,
  });
  const [toast, setToast] = useState({ open: false, toastMsg: '' });

  useEffect(() => {
    if (props.err !== null) {
      openToast(setToast, props.err);
    }
  }, [props.err]);

  useEffect(() => {
    if (props.orderPlaced === true) {
      props.actions.hideLoading();
      history.push('OrderConfirmation/success');
      removeCookies('Cart', { path: '/' });
      props.actions.resetCart();
    }
  }, [props.orderPlaced]);

  const sendPayment = (card, stripe) => {
    if (
      !address.email ||
      !address.name ||
      !address.addressLine ||
      !address.zipCode ||
      !address.phonenumber
    ) {
      openToast(setToast, 'Please enter all the details.');
      return;
    }

    // setTimeout(() => {
    props.actions.showLoding();
    // }, 500);
    stripe
      .confirmCardPayment(props.data.client_secret, {
        payment_method: {
          card: card,
          billing_details: {
            name: address.name,
          },
        },
      })
      .then((result) => {
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)

          openToast(setToast, result.error.message);
          props.actions.hideLoading();
        } else {
          // The payment has been processed!

          if (result.paymentIntent.status === 'succeeded') {
            props.actions.createOrder({
              ...address,
              totalItems: props.count,
              totalValue: props.totalAmount,
              products: props.productData.map((o) => {
                delete o.img;
                return o;
              }),
              paymentId: result.paymentIntent.id,
            });
          }
          // else if (intent.status === 'requires_action') {
          //   // Tell the client to handle the action
          //   return response.send({
          //     requiresAction: true,
          //     clientSecret: intent.client_secret,
          //   });
          // } else {
          //   throw 'error';
          // }
        }
      })
      .catch((e) => {
        openToast(
          setToast,
          'Error Occured While Payment processing please try again'
        );
        props.actions.hideLoading();
      });
  };

  const confirmGPay = (data, dats, complete, stripe) => {
    const payload = {
      email: dats.payerEmail,
      name: dats.shippingAddress.recipient,
      addressLine: dats.shippingAddress.addressLine,
      zipCode: dats.shippingAddress.postalCode,
      phonenumber: dats.shippingAddress.phone,
      totalItems: props.count,
      totalValue: props.totalAmount,
      products: props.productData.map((o) => {
        delete o.img;
        return o;
      }),
      paymentId: data.id,
    };
    complete('success');
    stripe
      .confirmCardPayment(props.data.client_secret, {
        payment_method: data.id,
      })
      .then((result) => {
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)

          openToast(setToast, result.error.message);
          props.actions.hideLoading();
        } else {
          // The payment has been processed!

          if (result.paymentIntent.status === 'succeeded') {
            props.actions.createOrder(payload);
          }
        }
      })
      .catch((e) => {
        openToast(
          setToast,
          'Error Occured While Payment processing please try again'
        );
        props.actions.hideLoading();
      });
  };

  useEffect(() => {
    if (props.totalAmount)
      props.actions.requestPayment({ amount: props.totalAmount });
  }, [props.totalAmount]);
  return (
    <>
      <Elements stripe={stripePromise}>
        <PaymentScreen
          loading={props.loading}
          email={cookies.UserEmail}
          total={props.totalAmount}
          initiatePayment={sendPayment}
          addressData={address}
          setAddress={setAddress}
          paymentProcessing={props.paymentProcessing}
          confirmGPay={confirmGPay}
        />
        <ShowToast msg={toast.toastMsg} type='error' open={toast.open} />
      </Elements>
    </>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  actions: bindActionCreators({ ...PaymentActions, ...CartActions }, dispatch),
});

const mapStateToProps = (state) => ({
  data: state.Payment.data,
  loading: state.Payment.loading,
  count: getCartItems(state),
  totalAmount: getTotalAmount(state),
  productData: mapCartToProducts(state),
  orderPlaced: state.Payment.orderPlaced,
  err: state.Payment.error,
  paymentProcessing: state.Payment.paymentProcessing,
});

export default connect(mapStateToProps, mapDispatchtoProps)(Payment);
