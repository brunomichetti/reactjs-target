export const userActionTypesConstants = {
  USER_REQUEST: 'USER_REQUEST',
  USER_REQUEST_SUCCESS: 'USER_REQUEST_SUCCESS',
  USER_REQUEST_ERROR: 'USER_REQUEST_ERROR',
  USER_UPDATE_SUCCESS: 'USER_UPDATE_SUCCESS',
  USER_UPDATE_SUCCESS_FINISHED: 'USER_UPDATE_SUCCESS_FINISHED',
  USER_RESET_PASSWORD_EMAIL_SENT: 'USER_RESET_PASSWORD_EMAIL_SENT',
  USER_CLEAN_ALERT: 'USER_CLEAN_ALERT',
  USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
};

export const userFormNames = {
  EMAIL: 'email',
  PASSWORD: 'password',
  PASSWORD_CONFIRM: 'passwordConfirm',
  NAME: 'name',
  GENDER: 'gender',
};

export const userErrorConstants = {
  SERVER_ERROR: 'Error connecting with server. Please try again later.',
  LOGIN_ERROR_CREDENTIALS:
    'Unable to login with provided credentials. Please check email and password.',
  RESET_PWD_INVALID_TOKEN_ERROR:
    'An error ocurred. Please go to the "Forgot your password?" link to start over the password recovery.',
  GET_TARGETS_ERROR:
    'An error ocurred while getting your targets. Please refresh or try again later',
  GET_MATCHES_ERROR:
    'An error ocurred while getting your matches. Please refresh or try again later',
  DELETE_TARGET_ERROR:
    'An error ocurred while deleting your target. Please refresh or try again later',
};
