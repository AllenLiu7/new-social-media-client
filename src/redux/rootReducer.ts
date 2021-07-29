import { combineReducers } from 'redux';

import userReducer from './slice/user';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
