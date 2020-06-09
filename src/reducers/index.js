
import { combineReducers } from 'redux';
import { authentication } from '../reducers/auth.reducer';

// Add new reducers here
const rootReducer = combineReducers({
  authentication
});

export default rootReducer;
