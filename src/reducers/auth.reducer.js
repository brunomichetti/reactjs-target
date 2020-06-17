import { userConstants } from "../constants/user.constants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState,  { type, user }) {
  switch (type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    default:
      return state
  }
}
