import { axiosClient } from './index';

export const updateLikeReq = (postId: string, currentUserId: string) => {
  return axiosClient.put(
    `post/${postId}/like`,
    JSON.stringify({
      userId: currentUserId,
    })
  );
};
