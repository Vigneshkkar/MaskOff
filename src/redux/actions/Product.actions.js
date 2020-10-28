// const { getCategoryDetails } = require('../saga/category.saga');
import { keys } from '../keys';
const { GET_PRODUCTS, FETCH_PRODUCTS, UPDATE_SEARCH, UPDATE_SORTBY } = keys;
export const getProductDetails = () => ({
  type: GET_PRODUCTS,
});

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCTS,
  payload: data,
});

export const updateSearch = (data) => ({
  type: UPDATE_SEARCH,
  payload: data,
});

export const updateSort = (data) => ({
  type: UPDATE_SORTBY,
  payload: data,
});
