import Axios from './AxiosHelper';

// import Products from './mockData/Products.json';

export default {
  getAllProducts: () => {
    return Axios.get('/Products').then((data) => data.data);
    // return new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve(Products);
    //   }, 2000)
    // );
  },
};
