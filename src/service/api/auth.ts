import { axiosClient } from './index';

export const _loginUser = (data) => {
  return axiosClient.post('/auth/login', JSON.stringify(data));
};

export const _registerUser = (data) => {
  return axiosClient.post('/auth/register', JSON.stringify(data));
};

export const _checkUsername = (data) => {
  return axiosClient.post('/auth/checkname', JSON.stringify(data));
};

export const _checkUserEmail = (data) => {
  return axiosClient.post('/auth/checkemail', JSON.stringify(data));
};
