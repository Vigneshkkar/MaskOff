// const { getCategoryDetails } = require('../saga/category.saga');
import { keys } from '../keys';
const { FETCH_SUCCESS, GET_CATEGORY } = keys;
export const getCategoryDetails = () => ({
  type: GET_CATEGORY,
});

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});
