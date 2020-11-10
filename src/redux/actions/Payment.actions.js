// const { getCategoryDetails } = require('../saga/category.saga');
import { keys } from '../keys';
const {
  REQUEST_PAYMENT,
  PAYMENT_SUCCESS,
  PAYMENT_ERROR,
  CREATE_ORDER,
  ORDER_SUCC,
  ORDER_FAIL,
  SHOW_LOADING,
  HIDE_LOADING,
} = keys;

export const requestPayment = (data) => ({
  type: REQUEST_PAYMENT,
  payload: data,
});

export const paymentSucc = (data) => ({
  type: PAYMENT_SUCCESS,
  payload: data,
});

export const paymentErr = (data) => ({
  type: PAYMENT_ERROR,
  payload: data,
});

export const createOrder = (data) => ({
  type: CREATE_ORDER,
  payload: data,
});

export const OrderFailed = (data) => ({
  type: ORDER_FAIL,
  payload: data,
});

export const orderSuccess = (data) => ({
  type: ORDER_SUCC,
  payload: data,
});

export const showLoding = () => ({
  type: SHOW_LOADING,
});
export const hideLoading = () => ({
  type: HIDE_LOADING,
});
