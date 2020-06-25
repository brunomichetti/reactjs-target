import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { history } from '../helpers/history';
import { alertActions } from '../actions/alert.actions';
import handleLoginError from '../helpers/error.handler';
import { homePageLink, loginPageLink } from '../constants/link.constants';

// Actions creator, the alerts will be removed
const login = (email, password) => {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return async (dispatch) => {
    dispatch(request({ email }));
    try {
      const response = await userService.login(email, password);
      const user = response.data.user;
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(success(user));
      dispatch(alertActions.success());
      history.push(homePageLink);
    } catch (error) {
      const errorMsg = handleLoginError(error);
      dispatch(failure(errorMsg));
      dispatch(alertActions.error(errorMsg));
    }
  };
};

const logout = () => {
  function request() {
    return { type: userConstants.LOGOUT_REQUEST };
  }
  function logoutResult() {
    return { type: userConstants.LOGOUT };
  }

  return async (dispatch) => {
    dispatch(request());
    await userService.logout();
    dispatch(logoutResult);
    dispatch(alertActions.success());
    localStorage.removeItem('user');
    history.push(loginPageLink);
  };
};

export const userActions = {
  login,
  logout,
};
