import { keys } from '../keys';
const { GET_CATEGORY, FETCH_SUCCESS, UPDATE_SEL_CATS, DELETE_SEL_CATS } = keys;
export const initialState = {
  data: null,
  selCats: [],
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
    case UPDATE_SEL_CATS:
      return {
        ...state,
        selCats: [...state.selCats, action.payload],
      };
    case DELETE_SEL_CATS:
      return {
        ...state,
        selCats: state.selCats.filter((o) => o !== action.payload),
      };
    default:
      return state;
  }
};

export default CategoryReducer;
