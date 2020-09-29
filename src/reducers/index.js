import { combineReducers } from 'redux';

import { user } from 'reducers/userReducer';
import { target } from 'reducers/targetReducers';

// Add all the reducers here
const rootReducer = combineReducers({
  user,
  target,
});

export default rootReducer;
