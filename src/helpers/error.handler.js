import { loginErrorConstants } from '../constants/login.error.constants';

export const handleLoginError = ({ response: { status, data } }) => {
  if (status === 400 && data.non_field_errors) {
    return loginErrorConstants.LOGIN_ERROR_CREDENTIALS;
  } else {
    return loginErrorConstants.SERVER_ERROR;
  }
};

export const handleSignupError = ({ response: { data } }) => {
  if (data['email']) {
    return data['email'];
  }
  if (data['password1']) {
    return data.password1[0];
  }
  return loginErrorConstants.SERVER_ERROR;
};

export const handleCreateTargetError = ({ response: { data } }) => {
  if (data['radius']) {
    return data.radius[0];
  }
  if (data.length > 0) {
    return data[0];
  }
  return loginErrorConstants.SERVER_ERROR;
};
