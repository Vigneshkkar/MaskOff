import { takeLatest, call, put } from 'redux-saga/effects';
import * as LoginActions from '../actions/Login.action';
import { Login } from '../../services';
import { keys } from '../keys';

const {
  REGISTER_USER,
  VALIDATE_USER,
  FORGOT_SEND_CODE,
  CHANGE_PASSWORD,
} = keys;

export function* registerUser() {
  yield takeLatest(REGISTER_USER, registerHandler);
}
export function* validateUser() {
  yield takeLatest(VALIDATE_USER, loginHandler);
}
export function* forgotPassword() {
  yield takeLatest(FORGOT_SEND_CODE, handleForgotPassword);
}
export function* changePassword() {
  yield takeLatest(CHANGE_PASSWORD, handleChangePassword);
}

export function* registerHandler(action) {
  try {
    const data = yield call(Login.registerUser, action.payload);
    yield put(LoginActions.regSuccess(action.payload.userEmail));
  } catch (err) {
    yield put(
      LoginActions.regFailed('Cannot Register. Email already registered.')
    );
  }
}

export function* loginHandler(action) {
  try {
    const data = yield call(Login.validateUser, action.payload);
    yield put(LoginActions.regSuccess(action.payload.userEmail));
  } catch (err) {
    yield put(
      LoginActions.regFailed(
        'Error Validating User. Please check Email and Password'
      )
    );
  }
}

export function* handleForgotPassword(action) {
  try {
    const data = yield call(Login.forgotPassword, action.payload);
    yield put(LoginActions.forgotPasswordSucc(action.payload.userEmail));
  } catch (err) {
    yield put(
      LoginActions.regFailed('Error resetting Password. Please check Email.')
    );
  }
}

export function* handleChangePassword(action) {
  try {
    const data = yield call(Login.changePassword, action.payload);
    yield put(LoginActions.regSuccess(action.payload.userEmail));
  } catch (err) {
    yield put(LoginActions.regFailed('Wrong Passcode Please Try again.'));
  }
}
