import { combineReducers } from 'redux';

import followingUsersReducer from './slice/getFollowingUsers';
import recommandUsersReducer from './slice/getRecommandUsers';
import timelinePostsReducer from './slice/getTimelinePosts';
import loginUserReducer from './slice/loginUser';

const combinedReducer = combineReducers({
  currentUser: loginUserReducer,
  followingUsers: followingUsersReducer,
  recommandUsers: recommandUsersReducer,
  timelinePosts: timelinePostsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logoutUser') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
