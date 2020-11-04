// const { getCategoryDetails } = require('../saga/category.saga');
import { keys } from '../keys';
const {
  FETCH_SUCCESS,
  GET_CATEGORY,
  UPDATE_SEL_CATS,
  DELETE_SEL_CATS,
  UPDATE_PRICE_RANGE,
} = keys;
export const getCategoryDetails = () => ({
  type: GET_CATEGORY,
});

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const updateSelCats = (data) => ({
  type: UPDATE_SEL_CATS,
  payload: data,
});
export const deleteCats = (data) => ({
  type: DELETE_SEL_CATS,
  payload: data,
});

export const updatePrice = (data) => ({
  type: UPDATE_PRICE_RANGE,
  payload: data,
});
