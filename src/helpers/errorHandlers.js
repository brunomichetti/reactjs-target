import { userErrorConstants } from 'constants/userConstants';

export const handleLoginError = ({ response: { status, data } }) => {
  if (status === 400 && data.non_field_errors) {
    return userErrorConstants.LOGIN_ERROR_CREDENTIALS;
  } else {
    return userErrorConstants.SERVER_ERROR;
  }
};

export const handleSignupError = ({ response: { data } }) => {
  if (data['email']) {
    return data['email'];
  }
  if (data['password1']) {
    return data.password1[0];
  }
  return userErrorConstants.SERVER_ERROR;
};

export const handleCreateTargetError = ({ response: { data } }) => {
  if (data['radius']) {
    return data.radius[0];
  }
  if (data.length > 0) {
    return data[0];
  }
  return userErrorConstants.SERVER_ERROR;
};

export const handleChangePasswordError = ({ response: { data } }) => {
  if (data['new_password2']) {
    return data.new_password2[0];
  }
  return userErrorConstants.SERVER_ERROR;
};

export const handleResetPasswordError = ({ response: { data } }) => {
  if (data['email']) {
    return data.email[0];
  }
  return userErrorConstants.SERVER_ERROR;
};

export const handleResetPasswordConfirmError = ({ response: { data } }) => {
  if (data['token']) {
    return userErrorConstants.RESET_PWD_INVALID_TOKEN_ERROR;
  }
  if (data['new_password2']) {
    return data.new_password2[0];
  }
  return userErrorConstants.SERVER_ERROR;
};
