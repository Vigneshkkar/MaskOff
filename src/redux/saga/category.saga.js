import { takeLatest, call, put } from 'redux-saga/effects';
import * as CategoryActions from '../actions/Category.actions';
import { CategoryServices } from '../../services';
import { keys } from '../keys';

const { GET_CATEGORY } = keys;

export function* fetchCategory() {
  yield takeLatest(GET_CATEGORY, getCategoryDetails);
}

export function* getCategoryDetails(action) {
  const data = yield call(CategoryServices.getCategories);

  yield put(CategoryActions.fetchSuccess(data));
}
