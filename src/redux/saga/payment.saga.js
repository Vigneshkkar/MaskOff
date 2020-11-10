import { takeLatest, call, put } from 'redux-saga/effects';
import * as PaymentActions from '../actions/Payment.actions';
import { CategoryServices } from '../../services';
import { keys } from '../keys';
import Payment from '../../services/Payment';

const { REQUEST_PAYMENT, CREATE_ORDER } = keys;

export function* fetchPaymentDetails() {
  yield takeLatest(REQUEST_PAYMENT, getPaymentDetails);
}

export function* getPaymentDetails(action) {
  try {
    const data = yield call(Payment.getPaymentDetails, action.payload);
    yield put(PaymentActions.paymentSucc(data));
  } catch (err) {
    yield put(
      PaymentActions.paymentErr(
        'Cannot Initialize payment please try again Later.'
      )
    );
  }
}

export function* createOrder() {
  yield takeLatest(CREATE_ORDER, createOrderHandler);
}

export function* createOrderHandler(action) {
  try {
    const data = yield call(Payment.createOrder, action.payload);
    yield put(PaymentActions.orderSuccess(data));
  } catch (err) {
    yield put(
      PaymentActions.paymentErr(
        'Cannot Initialize payment please try again Later.'
      )
    );
  }
}
