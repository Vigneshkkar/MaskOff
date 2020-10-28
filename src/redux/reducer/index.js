import { combineReducers } from 'redux';
import categoryReducer from './Category.reducer';
import ProductReducer from './Product.reducer';
import CartReducer from './Cart.reducer';

const appReducer = combineReducers({
  Category: categoryReducer,
  Products: ProductReducer,
  Cart: CartReducer,
});

const root = (state, action) => appReducer(state, action);

export default root;
