import { all, fork } from 'redux-saga/effects';

import { fetchCategory } from './category.saga';
import { fetchProducts } from './products.saga';

export default function* root() {
  yield all([fork(fetchCategory), fork(fetchProducts)]);
}
