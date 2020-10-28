import { createSelector } from 'reselect';

const getCart = (state) => state.Cart.selCart;

// const get = (state) => state.Products;
// reselect function
export const getCartItems = createSelector([getCart], (cart) => cart.length);
