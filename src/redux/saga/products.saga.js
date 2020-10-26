import { takeLatest, call, put } from 'redux-saga/effects';
import * as ProductActions from '../actions/Product.actions';
import { ProductServices } from '../../services';
import { keys } from '../keys';

const { GET_PRODUCTS } = keys;

export function* fetchProducts() {
  yield takeLatest(GET_PRODUCTS, getCategoryDetails);
}

export function* getCategoryDetails(action) {
  const data = yield call(ProductServices.getAllProducts);
  yield put(ProductActions.fetchProductSuccess(data));
}
