// const { getCategoryDetails } = require('../saga/category.saga');
import { keys } from '../keys';
const {
  REGISTER_USER,
  REGISTER_SUCC,
  REGISTER_ERR,
  VALIDATE_USER,
  FORGOT_SEND_CODE,
  FORGOT_SEND_SUCC,
  CHANGE_PASSWORD,
} = keys;
export const registerUser = (data) => ({
  type: REGISTER_USER,
  payload: data,
});

export const regSuccess = (data) => ({
  type: REGISTER_SUCC,
  payload: data,
});

export const regFailed = (data) => ({
  type: REGISTER_ERR,
  payload: data,
});

export const validateUser = (data) => ({
  type: VALIDATE_USER,
  payload: data,
});
export const forgotPassword = (data) => ({
  type: FORGOT_SEND_CODE,
  payload: data,
});

export const forgotPasswordSucc = (data) => ({
  type: FORGOT_SEND_SUCC,
  payload: data,
});

export const changePassword = (data) => ({
  type: CHANGE_PASSWORD,
  payload: data,
});
