import { userConstants } from '../constants/user.constants';

export const authentication = (state = {}, { type, result }) => {
  switch (type) {
    case userConstants.USER_REQUEST:
      return {
        userRequest: true,
      };
    case userConstants.USER_REQUEST_SUCCESS:
    case userConstants.LOGIN_SUCCESS:
    case userConstants.SIGNUP_SUCCESS:
    case userConstants.LOGOUT_SUCCESS:
      return {};
    case userConstants.LOGIN_FAILURE:
    case userConstants.SIGNUP_FAILURE:
    case userConstants.USER_REQUEST_ERROR:
      return {
        authError: true,
        errorMsg: result,
      };
    default:
      return state;
  }
};
