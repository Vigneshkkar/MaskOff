const getTime = () => {
  const year = new Date().getFullYear() + 1;
  const oneYear = new Date().setFullYear(year);
  return new Date(oneYear);
};

export const setAppCookies = (count, obj, cookies, setCookie) => {
  let cartValue = [];
  if (cookies.Cart) {
    cartValue = JSON.parse(decodeURI(cookies.Cart));
    cartValue = cartValue.filter((o) => o.n !== obj.Name);
  }
  cartValue.push({ q: count, n: obj.Name });
  setCookie('Cart', encodeURI(JSON.stringify(cartValue)), {
    path: '/',
    expires: getTime(),
  });
};

export const setAppCookiesDirect = (obj, setCookie) => {
  setCookie('Cart', encodeURI(JSON.stringify(obj)), {
    path: '/',
    expires: getTime(),
  });
};

export const setUserLogged = (userEmail, setCookie) => {
  setCookie('UserEmail', encodeURI(userEmail), {
    path: '/',
    expires: getTime(),
  });
};

export const clearAllCookies = (removeCookie) => {
  ['UserEmail', 'Cart', 'ageVerify'].map((o) => {
    removeCookie(o);
  });
};
