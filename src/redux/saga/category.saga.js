import { takeLatest, call, put } from 'redux-saga/effects';
import * as CategoryActions from '../actions/Category.actions';
import { CategoryServices } from '../../services';
import { keys } from '../keys';

const { GET_CATEGORY, GET_PRICE_RANGE } = keys;

export function* fetchCategory() {
  yield takeLatest(GET_CATEGORY, getCategoryDetails);
}

export function* fetchPriceRange() {
  yield takeLatest(GET_PRICE_RANGE, getPriceCategories);
}

export function* getCategoryDetails(action) {
  const data = yield call(CategoryServices.getCategories);

  yield put(CategoryActions.fetchSuccess(data));
}

export function* getPriceCategories(action) {
  const data = yield call(CategoryServices.getPriceRange);

  yield put(CategoryActions.updatePrice(data));
}
