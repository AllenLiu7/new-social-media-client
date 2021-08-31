import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import followingUsersReducer from './slice/getFollowingUsers';
import recommandUsersReducer from './slice/getRecommandUsers';
import timelinePostsReducer from './slice/getTimelinePosts';
import loginUserReducer from './slice/loginUser';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['token'],
};

const combinedReducer = combineReducers({
  currentUser: persistReducer(authPersistConfig, loginUserReducer), //nested persist to exclude token
  followingUsers: followingUsersReducer,
  recommandUsers: recommandUsersReducer,
  timelinePosts: timelinePostsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logoutUser') {
    state = undefined;
    storage.removeItem('persist:auth');
  }
  return combinedReducer(state, action);
};

export default rootReducer;
