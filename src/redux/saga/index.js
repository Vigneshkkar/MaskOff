import { all, fork } from 'redux-saga/effects';

import { fetchCategory, fetchPriceRange } from './category.saga';
import { fetchProducts } from './products.saga';

import {
  registerUser,
  validateUser,
  forgotPassword,
  changePassword,
} from './login.saga';

export default function* root() {
  yield all([
    fork(fetchCategory),
    fork(fetchProducts),
    fork(fetchPriceRange),
    fork(registerUser),
    fork(validateUser),
    fork(forgotPassword),
    fork(changePassword),
  ]);
}
