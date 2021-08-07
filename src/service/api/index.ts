import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: `http://localhost:8000/api`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // let res = error.response;
    // console.error('Looks like there was a problem. Status Code: ' + res.status);
    return Promise.reject(error);
  }
);
