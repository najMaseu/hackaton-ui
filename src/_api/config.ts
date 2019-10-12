import axios from 'axios';

export default axios.create({
  baseURL: 'https://patyk.herokuapp.com/api/',
  timeout: 1000,
});
