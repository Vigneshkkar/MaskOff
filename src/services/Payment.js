import Axios from './AxiosHelper';

export default {
  getPaymentDetails: (data) => {
    return Axios.post('/Checkout/secret', data).then((data) => data.data);
  },
  createOrder: (data) => {
    return Axios.post('/Orders/createOrder', data).then((data) => data.data);
  },
};
