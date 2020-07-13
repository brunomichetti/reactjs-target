import { combineReducers } from 'redux';

import { authentication } from '../reducers/auth.reducer';
import { target } from '../reducers/target.reducers';

// Add all the reducers here
const rootReducer = combineReducers({
  authentication,
  target,
});

export default rootReducer;
