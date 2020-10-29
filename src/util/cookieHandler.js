export const setAppCookies = (count, obj, cookies, setCookie) => {
  const year = new Date().getFullYear() + 1;
  const oneYear = new Date().setFullYear(year);
  let cartValue = [];
  if (cookies.Cart) {
    cartValue = JSON.parse(decodeURI(cookies.Cart));
    cartValue = cartValue.filter((o) => o.n !== obj.Name);
  }
  cartValue.push({ q: count, n: obj.Name });
  setCookie('Cart', encodeURI(JSON.stringify(cartValue)), {
    path: '/',
    expires: new Date(oneYear),
  });
};

export const setAppCookiesDirect = (obj, setCookie) => {
  const year = new Date().getFullYear() + 1;
  const oneYear = new Date().setFullYear(year);
  setCookie('Cart', encodeURI(JSON.stringify(obj)), {
    path: '/',
    expires: new Date(oneYear),
  });
};
