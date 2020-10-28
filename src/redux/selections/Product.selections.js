import { createSelector } from 'reselect';
import { sortBy } from '../../util/customSorter';

const getProducts = (state) => state.Products.data;
const getSearch = (state) => state.Products.searchValue;
const getSort = (state) => state.Products.sortValue;
const getCat = (state) => state.Category.selCats;

// const get = (state) => state.Products;
// reselect function
export const getFilteredSorted = createSelector(
  [getProducts, getSearch, getSort, getCat],
  (products, search, sortByParam, selCats) => {
    const selctedCats = selCats;
    let filteredCats = products;
    if (selCats.length > 0)
      filteredCats = products.filter((o) => {
        let flag = false;
        for (var i of selctedCats) {
          const mainCat = i.split('-')[0];
          const subCat = i.split('-')[1];
          if (subCat) flag = o.MainCat === mainCat && o.SubCat === subCat;
          else flag = o.MainCat === mainCat;

          if (flag) break;
        }
        return flag;
      });
    // console.log(filteredCats);
    const filteredProd = filteredCats.filter((o) =>
      o.Name.toLowerCase().includes(search.toLowerCase())
    );
    // console.log(
    filteredProd.sort(sortBy(sortByParam.name, sortByParam.asc ? 1 : -1));
    // );
    return filteredProd;
  }
);
