import { userActionTypesConstants } from 'constants/user.constants';

const {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_CLEAN_ALERT,
  USER_REQUEST_ERROR,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_SUCCESS_FINISHED,
  USER_RESET_PASSWORD_EMAIL_SENT,
  USER_SIGNUP_SUCCESS,
} = userActionTypesConstants;

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
    case USER_REQUEST:
      return {
        ...state,
        requestError: false,
        loading: true,
      };
    case USER_REQUEST_SUCCESS:
    case USER_CLEAN_ALERT:
      return {
        ...state,
        loading: false,
        requestError: false,
        errorMsg: '',
        emailSent: false,
        signup: false,
      };
    case USER_REQUEST_ERROR:
      return {
        loading: false,
        requestError: true,
        errorMsg: result,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        requestError: false,
        updated: true,
      };
    case USER_UPDATE_SUCCESS_FINISHED:
      return {
        ...state,
        updated: false,
      };
    case USER_RESET_PASSWORD_EMAIL_SENT:
      return {
        ...state,
        loading: false,
        emailSent: true,
      };
    case USER_SIGNUP_SUCCESS:
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
