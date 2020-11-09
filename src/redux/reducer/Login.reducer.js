import { act } from 'react-dom/test-utils';
import { keys } from '../keys';
const {
  REGISTER_USER,
  REGISTER_SUCC,
  REGISTER_ERR,
  VALIDATE_USER,
  FORGOT_SEND_CODE,
  FORGOT_SEND_SUCC,
  RESET_LOGIN,
  CHANGE_PASSWORD,
} = keys;
export const initialState = {
  data: null,
  loading: false,
  forgotPassCode: false,
  forgotEmail: null,
  error: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FORGOT_SEND_CODE:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case VALIDATE_USER:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case REGISTER_SUCC:
      return {
        ...state,
        loading: false,
        data: action.payload,
        forgotPassCode: false,
        forgotEmail: null,
        error: null,
      };
    case FORGOT_SEND_SUCC:
      return {
        ...state,
        loading: false,
        data: null,
        forgotPassCode: true,
        forgotEmail: action.payload,
        error: null,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case REGISTER_ERR:
      console.log(state);
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    case RESET_LOGIN:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
        forgotPassCode: false,
        forgotEmail: null,
      };
    default:
      return state;
  }
};

export default CartReducer;
