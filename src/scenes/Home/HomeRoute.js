import HomePage from '../HomePage';
import Cart from '../Cart';
import Order from '../OrderConfirmation';
import Payment from '../Payment';

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
  {
    path: '/Home/Payment',
    component: Payment,
  },
];

export default routes;
