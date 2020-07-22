import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { history } from '../helpers/history';
import { handleLoginError, handleSignupError } from '../helpers/error.handler';
import { homePageLink, loginPageLink } from '../constants/link.constants';
import { targetService } from '../services/target.services';
import { targetConstants } from '../constants/target.constants';

export const userRequest = () => ({ type: userConstants.USER_REQUEST });

const successToHomePage = async (user, dispatch) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('refreshToken', user.refresh_token);
  localStorage.setItem('accessToken', user.access_token);
  dispatch({ type: userConstants.USER_REQUEST_SUCCESS });
  const { data: targets } = await targetService.getTargets();
  dispatch({ type: targetConstants.GET_TARGETS_SUCCESS, result: targets });
  history.push(homePageLink);
};

const login = (email, password) => {
  return async (dispatch) => {
    try {
      const { data: user } = await userService.login(email, password);
      successToHomePage(user, dispatch);
    } catch (error) {
      const errorMsg = handleLoginError(error);
      dispatch({ type: userConstants.USER_REQUEST_ERROR, result: errorMsg });
    }
  };
};

const logout = () => {
  return async (dispatch) => {
    await userService.logout();
    dispatch({ type: userConstants.USER_REQUEST_SUCCESS });
    dispatch({ type: targetConstants.CLEAN_TARGETS });
    localStorage.removeItem('user');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    history.push(loginPageLink);
  };
};

const signup = (name, email, password1, password2, gender) => {
  return async (dispatch) => {
    try {
      const { data: user } = await userService.signup(
        name,
        email,
        password1,
        password2,
        gender
      );
      successToHomePage(user, dispatch);
    } catch (error) {
      const errorMsg = handleSignupError(error);
      dispatch({ type: userConstants.USER_REQUEST_ERROR, result: errorMsg });
    }
  };
};

export const userActions = {
  login,
  logout,
  signup,
};
