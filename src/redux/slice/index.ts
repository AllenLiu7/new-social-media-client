import { combineReducers } from 'redux';

import getUserReducer from './getUser';

const rootReducer = combineReducers({
  user: getUserReducer,
});

export default rootReducer;
