import { createSelector } from 'reselect';

const getCart = (state) => state.Cart.selCart;

const getProducts = (state) => state.Products.data;

// const get = (state) => state.Products;
// reselect function
export const getCartItems = createSelector([getCart], (cart) => cart.length);

export const mapCartToProducts = createSelector(
  [getCart, getProducts],
  (cart, Products) => {
    if (Products.length === 0 || cart.length === 0) return [];
    let CartProducts = [];
    for (var i of cart) {
      const data = i;
      CartProducts.push({
        quantity: data.q,
        ...Products.find((o) => o.Name === data.n),
      });
    }
    return CartProducts;
  }
);

export const getTotalAmount = createSelector([mapCartToProducts], (cart) =>
  cart.map((o) => o.Price * o.quantity).reduce((o, i) => o + i, 0)
);
