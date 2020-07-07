import { combineReducers } from 'redux';

import { authentication } from '../reducers/auth.reducer';
import { alert } from '../reducers/alert.reducers';
import { target } from '../reducers/target.reducers';

// Add all the reducers here
const rootReducer = combineReducers({
  authentication,
  alert,
  target,
});

export default rootReducer;
