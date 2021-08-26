import { axiosClient } from './index';

export const loginUserReq = (data) => {
  return axiosClient.post('/auth/login', JSON.stringify(data));
};

export const registerUserReq = (data) => {
  return axiosClient.post('/auth/register', JSON.stringify(data));
};

export const checkUsernameReq = (data) => {
  return axiosClient.post('/auth/checkname', JSON.stringify(data));
};

export const checkUserEmailReq = (data) => {
  return axiosClient.post('/auth/checkemail', JSON.stringify(data));
};
