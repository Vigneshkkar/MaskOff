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
export const initialState = {
  data: null,
  loading: false,
  error: null,
  orderPlaced: false,
  paymentProcessing: false,
};

const PaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PAYMENT:
      return {
        ...state,
        loading: true,
      };
    case PAYMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case PAYMENT_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    case CREATE_ORDER:
      return {
        ...state,
        loading: true,
      };
    case ORDER_SUCC:
      return {
        ...state,
        data: action.payload,
        loading: false,
        orderPlaced: true,
      };
    case ORDER_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    case SHOW_LOADING:
      return {
        ...state,
        paymentProcessing: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        paymentProcessing: false,
        orderPlaced: false,
      };
    default:
      return state;
  }
};

export default PaymentReducer;
