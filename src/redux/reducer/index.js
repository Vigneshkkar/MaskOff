import { combineReducers } from 'redux';
import categoryReducer from './Category.reducer';
import ProductReducer from './Product.reducer';

const appReducer = combineReducers({
  Category: categoryReducer,
  Products: ProductReducer,
});

const root = (state, action) => appReducer(state, action);

export default root;
