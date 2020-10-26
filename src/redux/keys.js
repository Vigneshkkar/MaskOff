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
});
