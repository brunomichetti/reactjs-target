import { userConstants } from 'constants/user.constants';

export const user = (
  state = {
    loading: false,
    requestError: false,
    errorMsg: '',
    updated: false,
    emailSent: false,
    signup: false,
  },
  { type, result }
) => {
  switch (type) {
    case userConstants.USER_REQUEST:
      return {
        ...state,
        requestError: false,
        loading: true,
      };
    case userConstants.USER_REQUEST_SUCCESS:
    case userConstants.USER_CLEAN_ALERT:
      return {
        ...state,
        loading: false,
        requestError: false,
        errorMsg: '',
        emailSent: false,
        signup: false,
      };
    case userConstants.USER_REQUEST_ERROR:
      return {
        loading: false,
        requestError: true,
        errorMsg: result,
      };
    case userConstants.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        requestError: false,
        updated: true,
      };
    case userConstants.USER_UPDATE_SUCCESS_FINISHED:
      return {
        ...state,
        updated: false,
      };
    case userConstants.USER_RESET_PASSWORD_EMAIL_SENT:
      return {
        ...state,
        loading: false,
        emailSent: true,
      };
    case userConstants.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        requestError: false,
        signup: true,
      };
    default:
      return state;
  }
};
