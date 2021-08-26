import { axiosClient } from './index';

export const uploadPostImageReq = (data) => {
  return axiosClient.post('upload/post_image', data);
};
