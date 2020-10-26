import { keys } from '../keys';
const { GET_CATEGORY, FETCH_SUCCESS } = keys;
export const initialState = {
  data: null,
  loading: false,
  error: null,
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
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

export default CategoryReducer;
