const keyMirror = (keys) => {
  keys = Array.isArray(keys) ? keys : Object.keys(keys);
  let mirror = {};
  keys.map((v) => (mirror[v] = v));
  return mirror;
};

export const keys = keyMirror({
  GET_CATEGORY: null,
  FETCH_SUCCESS: null,

  GET_PRODUCTS: null,
  FETCH_PRODUCTS: null,
  UPDATE_SEARCH: null,
  UPDATE_SORTBY: null,
  UPDATE_SEL_CATS: null,
  DELETE_SEL_CATS: null,
  GET_PRICE_RANGE: null,
  UPDATE_PRICE_RANGE: null,

  ADD_CART: null,
  DELETE_CART: null,
  RESET_CART: null,
});
