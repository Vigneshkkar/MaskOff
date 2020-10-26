// const { getCategoryDetails } = require('../saga/category.saga');
import { keys } from '../keys';
const { GET_PRODUCTS, FETCH_PRODUCTS } = keys;
export const getProductDetails = () => ({
  type: GET_PRODUCTS,
});

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCTS,
  payload: data,
});
