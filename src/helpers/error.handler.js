import { loginErrorConstants } from '../constants/login.error.constants';

export const handleLoginError = (error) => {
  const errorResponse = error.response;
  if (errorResponse.status === 400 && errorResponse.data.non_field_errors) {
    return loginErrorConstants.LOGIN_ERROR_CREDENTIALS;
  } else {
    return loginErrorConstants.SERVER_ERROR;
  }
};

export const handleSignupError = (error) => {
  debugger;
  const errorResponse = error.response;
  if (errorResponse.data['email']) {
    return errorResponse.data['email'];
  }
  if (error.response.data['password1']) {
    return error.response.data.password1[0];
  }
  return loginErrorConstants.SERVER_ERROR;
};
