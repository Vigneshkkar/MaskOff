import { keys } from '../keys';
const { GET_PRODUCTS, FETCH_PRODUCTS } = keys;
export const initialState = {
  data: null,
  loading: false,
  error: null,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default ProductReducer;
