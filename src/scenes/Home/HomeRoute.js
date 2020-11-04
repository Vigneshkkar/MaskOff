import HomePage from '../HomePage';
import Cart from '../Cart';
import Order from '../OrderConfirmation';

const routes = [
  {
    path: '/Home',
    exact: true,
    component: HomePage,
  },
  {
    path: '/Home/Cart',
    component: Cart,
  },
  {
    path: '/Home/OrderConfirmation/:status',
    component: Order,
  },
];

export default routes;
