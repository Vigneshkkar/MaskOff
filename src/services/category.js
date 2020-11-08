import Axios from './AxiosHelper';

import Category from './mockData/Category.json';

export default {
  getCategories: () => {
    return Axios.get('/Categories').then((data) => data.data);
    //        return new Promise(resolve => setTimeout(() => {
    //                resolve(Category);
    //        }, 2000) );
  },
  getPriceRange: () => {
    return Axios.get('/Products/priceRange').then((data) => [
      data.data.min,
      data.data.max,
    ]);
  },
};
