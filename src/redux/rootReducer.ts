import { combineReducers } from 'redux';

import userReducer from './slice/getUser';
import followingUsersReducer from './slice/getFollowingUsers';
import userPostsReducer from './slice/getUserPosts';
import timelinePostsReducer from './slice/getTimelinePosts';

const rootReducer = combineReducers({
  user: userReducer,
  followingUsers: followingUsersReducer,
  userPosts: userPostsReducer,
  timelinePosts: timelinePostsReducer,
});

export default rootReducer;
