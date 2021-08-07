import { axiosClient } from './index';

export const _loginUser = (data) => {
  return axiosClient.post('/auth/login', JSON.stringify(data));
};

export const _registerUser = (data) => {
  return axiosClient.post('/auth/register', JSON.stringify(data));
};
