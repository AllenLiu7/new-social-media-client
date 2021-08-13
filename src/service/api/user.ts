import { axiosClient } from './index';

export const _getUser = (id) => {
  return axiosClient.get(`/user?userId=${id}`);
};
