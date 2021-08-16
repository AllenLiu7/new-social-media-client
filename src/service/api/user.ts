import { axiosClient } from './index';

export const _getUser = (id: string) => {
  return axiosClient.get(`/user?userId=${id}`);
};

export const _unfollowUser = (currentUserId: string, paramId: string) => {
  return axiosClient.put(`user/${currentUserId}/unfollow`, {
    userId: paramId,
  });
};

export const _followUser = (currentUserId: string, paramId: string) => {
  return axiosClient.put(`user/${currentUserId}/follow`, {
    userId: paramId,
  });
};
