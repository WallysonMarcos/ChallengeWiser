import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  withCredentials: false,
  headers: {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'Access-Control-Allow-Credentials' : true
  },
});

export default api;
