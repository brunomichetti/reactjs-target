import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { history } from '../helpers/history';
import { handleLoginError, handleSignupError } from '../helpers/error.handler';
import { homePageLink, loginPageLink } from '../constants/link.constants';
import { targetService } from '../services/target.services';
import { targetConstants } from '../constants/target.constants';

const userRequest = () => ({ type: userConstants.USER_REQUEST });

const successToHomePage = async (user, dispatch, sucessAction) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('refreshToken', user.refresh_token);
  localStorage.setItem('accessToken', user.access_token);
  dispatch(sucessAction);
  const { data: targets } = await targetService.getTargets();
  dispatch({ type: targetConstants.GET_TARGETS_SUCCESS, result: targets });
  //localStorage.setItem('userTargets', JSON.stringify(targets));
  history.push(homePageLink);
};

const login = (email, password) => {
  return async (dispatch) => {
    dispatch(userRequest());
    try {
      const { data: user } = await userService.login(email, password);
      successToHomePage(user, dispatch, {
        type: userConstants.LOGIN_SUCCESS,
      });
    } catch (error) {
      const errorMsg = handleLoginError(error);
      dispatch({ type: userConstants.LOGIN_FAILURE, result: errorMsg });
    }
  };
};

const logout = () => {
  return async (dispatch) => {
    dispatch(userRequest());
    await userService.logout();
    dispatch({ type: userConstants.LOGOUT_SUCCESS });
    localStorage.removeItem('user');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userTargets');
    history.push(loginPageLink);
  };
};

const signup = (name, email, password1, password2, gender) => {
  return async (dispatch) => {
    dispatch(userRequest());
    try {
      const { data: user } = await userService.signup(
        name,
        email,
        password1,
        password2,
        gender
      );
      successToHomePage(user, dispatch, { type: userConstants.SIGNUP_SUCCESS });
    } catch (error) {
      const errorMsg = handleSignupError(error);
      dispatch({ type: userConstants.SIGNUP_FAILURE, result: errorMsg });
    }
  };
};

export const userActions = {
  login,
  logout,
  signup,
};
