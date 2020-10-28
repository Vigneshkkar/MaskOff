// const { getCategoryDetails } = require('../saga/category.saga');
import { keys } from '../keys';
const { ADD_CART, DELETE_CART, RESET_CART } = keys;
export const addToCart = (data) => ({
  type: ADD_CART,
  payload: data,
});

export const deleteCart = (data) => ({
  type: DELETE_CART,
  payload: data,
});

export const resetCart = (data) => ({
  type: RESET_CART,
  payload: data,
});
