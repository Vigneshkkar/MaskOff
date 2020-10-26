import Products from './mockData/Products.json';

export default {
  getAllProducts: () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(Products);
      }, 2000)
    );
  },
};
