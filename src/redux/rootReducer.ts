import { combineReducers } from 'redux';

import followingUsersReducer from './slice/getFollowingUsers';
import timelinePostsReducer from './slice/getTimelinePosts';
import userPostsReducer from './slice/getUserPosts';
import loginUserReducer from './slice/loginUser';

const rootReducer = combineReducers({
  currentUser: loginUserReducer,
  followingUsers: followingUsersReducer,
  userPosts: userPostsReducer,
  timelinePosts: timelinePostsReducer,
});

export default rootReducer;
