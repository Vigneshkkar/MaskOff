import { keys } from '../keys';
const {
  ADD_CART,
  DELETE_CART,
  RESET_CART,
  REQUEST_PAYMENT,
  PAYMENT_SUCCESS,
  PAYMENT_ERROR,
} = keys;
export const initialState = {
  data: null,
  selCart: [],
  loading: false,
  error: null,
  paymentDetails: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        selCart: action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        selCart: state.selCart.filter((o) => o.n !== action.payload),
      };
    case RESET_CART:
      return {
        ...state,
        selCats: [],
      };
    default:
      return state;
  }
};

export default CartReducer;
