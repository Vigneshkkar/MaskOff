import axios from 'axios';

const AxiosHelper = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export default AxiosHelper;
