import HomePage from '../HomePage';
import Cart from '../Cart';

const routes = [
    {
      path: "/Home",
      exact: true,
      component: HomePage,
    },
    {
      path: "/Home/Cart",
      component: Cart,
    }
  ];

export default routes;