import { keys } from '../keys';
const { GET_PRODUCTS, FETCH_PRODUCTS, UPDATE_SEARCH, UPDATE_SORTBY } = keys;
export const initialState = {
  searchValue: '',
  sortValue: { name: 'Name', asc: true },
  data: [],

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
    case UPDATE_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
      };
    case UPDATE_SORTBY:
      return {
        ...state,
        sortValue: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
