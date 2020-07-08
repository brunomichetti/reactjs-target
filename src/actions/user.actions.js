import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { history } from '../helpers/history';
import { alertActions } from '../actions/alert.actions';
import { handleLoginError, handleSignupError } from '../helpers/error.handler';
import { homePageLink, loginPageLink } from '../constants/link.constants';

export const request = (user) => {
  return { type: userConstants.USER_REQUEST, user };
};

const successToHomePage = (user, dispatch, success) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('refreshToken', user.refresh_token);
  localStorage.setItem('accessToken', user.access_token);
  dispatch(success(user));
  dispatch(alertActions.success());
  history.push(homePageLink);
};

const errorFromServer = (errorMsg, dispatch, failure) => {
  dispatch(failure(errorMsg));
  dispatch(alertActions.error(errorMsg));
};

// Actions creator, the alerts will be removed
const login = (email, password) => {
  const success = (user) => {
    return { type: userConstants.LOGIN_SUCCESS, user };
  };
  const failure = (error) => {
    return { type: userConstants.LOGIN_FAILURE, error };
  };

  return async (dispatch) => {
    dispatch(request({ email }));
    try {
      const { data: user } = await userService.login(email, password);
      successToHomePage(user, dispatch, success);
    } catch (error) {
      const errorMsg = handleLoginError(error);
      errorFromServer(errorMsg, dispatch, failure);
    }
  };
};

const logout = () => {
  const request = () => {
    return { type: userConstants.LOGOUT_REQUEST };
  };
  const logoutResult = () => {
    return { type: userConstants.LOGOUT };
  };

  return async (dispatch) => {
    dispatch(request());
    await userService.logout();
    dispatch(logoutResult);
    dispatch(alertActions.success());
    localStorage.removeItem('user');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    history.push(loginPageLink);
  };
};

const signup = (name, email, password1, password2, gender) => {
  const success = (user) => {
    return { type: userConstants.SIGNUP_SUCCESS, user };
  };
  const failure = (error) => {
    return { type: userConstants.SIGNUP_FAILURE, error };
  };
  return async (dispatch) => {
    dispatch(request({ email }));
    try {
      const { data: user } = await userService.signup(
        name,
        email,
        password1,
        password2,
        gender
      );
      successToHomePage(user, dispatch, success);
    } catch (error) {
      const errorMsg = handleSignupError(error);
      errorFromServer(errorMsg, dispatch, failure);
    }
  };
};

export const userActions = {
  login,
  logout,
  signup,
};
