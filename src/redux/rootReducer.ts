import { combineReducers } from 'redux';

import loginUserReducer from './slice/getCurrentUser';

import followingUsersReducer from './slice/getFollowingUsers';
import userPostsReducer from './slice/getUserPosts';
import timelinePostsReducer from './slice/getTimelinePosts';

const rootReducer = combineReducers({
  currentUser: loginUserReducer,
  followingUsers: followingUsersReducer,
  userPosts: userPostsReducer,
  timelinePosts: timelinePostsReducer,
});

export default rootReducer;
