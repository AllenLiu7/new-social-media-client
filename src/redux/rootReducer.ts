import { combineReducers } from 'redux';

import followingUsersReducer from './slice/getFollowingUsers';
import timelinePostsReducer from './slice/getTimelinePosts';
import userPostsReducer from './slice/getUserPosts';
import loginUserReducer from './slice/loginUser';

const combinedReducer = combineReducers({
  currentUser: loginUserReducer,
  followingUsers: followingUsersReducer,
  userPosts: userPostsReducer,
  timelinePosts: timelinePostsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logoutUser') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
