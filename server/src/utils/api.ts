import axios from 'axios';

const api = axios({
  baseURL: process.env.CAT_API,
  headers: {
    'x-api-key': process.env.CAT_API_KEY,
  },
});

export default api;
