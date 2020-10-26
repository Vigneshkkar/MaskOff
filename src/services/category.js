import Category from "./mockData/Category.json";

export default {
        getCategories : () => {
               return new Promise(resolve => setTimeout(() => {
                       resolve(Category);
               }, 2000) );
        }
}