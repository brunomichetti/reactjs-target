
import { combineReducers } from "redux";

import { authentication } from "../reducers/auth.reducer";
import { alert } from "../reducers/alert.reducers";

// Add all the reducers here
const rootReducer = combineReducers({
  authentication,
  alert
});

export default rootReducer;
