import Axios from './AxiosHelper';

export default {
  registerUser: (data) => {
    return Axios.post('/user/register', data).then((data) => data.data);
  },
  validateUser: (data) => {
    return Axios.post('/user/validate', data).then((data) => data.data);
  },
  forgotPassword: (data) => {
    return Axios.post('/user/resetPassword', data).then((data) => data.data);
  },
  changePassword: (data) => {
    return Axios.post('/user/changePassword', data).then((data) => data.data);
  },
};
