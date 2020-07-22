import { combineReducers } from 'redux';

import { user } from './user.reducer';
import { target } from '../reducers/target.reducers';

// Add all the reducers here
const rootReducer = combineReducers({
  user,
  target,
});

export default rootReducer;
