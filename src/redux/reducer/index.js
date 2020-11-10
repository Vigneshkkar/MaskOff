import { combineReducers } from 'redux';
import categoryReducer from './Category.reducer';
import ProductReducer from './Product.reducer';
import CartReducer from './Cart.reducer';
import LoginReducer from './Login.reducer';
import PaymentReducer from './Payment.reducer';

const appReducer = combineReducers({
  Category: categoryReducer,
  Products: ProductReducer,
  Cart: CartReducer,
  Login: LoginReducer,
  Payment: PaymentReducer,
});

const root = (state, action) => appReducer(state, action);

export default root;
