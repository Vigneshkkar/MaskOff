import axios from 'axios';
let BaseURL = 'http://localhost:8080/api';

if (process.env.REACT_APP_STAGE === 'production') {
  BaseURL = 'https://vigneshkkar.in/api/';
}
console.log(process.env.REACT_APP_STAGE);

const AxiosHelper = axios.create({
  baseURL: BaseURL,
});

export default AxiosHelper;
