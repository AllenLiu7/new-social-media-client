import { combineReducers } from 'redux';

import userReducer from './slice/user';
import followingsReducer from './slice/followings';
import userPostsReducer from './slice/userPosts';

const rootReducer = combineReducers({
  user: userReducer,
  userPosts: userPostsReducer,
  followings: followingsReducer,
});

export default rootReducer;
