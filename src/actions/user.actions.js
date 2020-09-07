import { userConstants } from '../constants/user.constants';
import { userService } from '../services/user.services';
import { history } from '../helpers/history';
import {
  handleLoginError,
  handleSignupError,
  handleChangePasswordError,
  handleResetPasswordError,
  handleResetPasswordConfirmError,
} from '../helpers/error.handler';
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

const update = (
  name,
  gender,
  password,
  confirmNewPassword,
  newImg,
  changedNameOrGender
) => {
  return async (dispatch) => {
    try {
      if (password) {
        await userService.changePassword(password, confirmNewPassword);
      }
      if (changedNameOrGender || newImg) {
        const { data: user } = await userService.update(name, gender, newImg);
        const storedUser = JSON.parse(localStorage.getItem('user'));
        storedUser.user = user;
        localStorage.setItem('user', JSON.stringify(storedUser));
      }
      dispatch({ type: userConstants.USER_UPDATE_SUCCESS });
      history.push(homePageLink);
    } catch (error) {
      const errorMsg = handleChangePasswordError(error);
      dispatch({ type: userConstants.USER_REQUEST_ERROR, result: errorMsg });
    }
  };
};

const resetPassword = (email) => {
  return async (dispatch) => {
    try {
      await userService.resetPassword(email);
      dispatch({ type: userConstants.USER_RESET_PASSWORD_EMAIL_SENT });
      history.push(loginPageLink);
    } catch (error) {
      const errorMsg = handleResetPasswordError(error);
      dispatch({ type: userConstants.USER_REQUEST_ERROR, result: errorMsg });
    }
  };
};

const resetPasswordConfirm = (newPassword1, newPassword2, uid, token) => {
  return async (dispatch) => {
    try {
      await userService.resetPasswordConfirm(
        newPassword1,
        newPassword2,
        uid,
        token
      );
      dispatch({ type: userConstants.USER_UPDATE_SUCCESS });
      history.push(loginPageLink);
    } catch (error) {
      const errorMsg = handleResetPasswordConfirmError(error);
      dispatch({ type: userConstants.USER_REQUEST_ERROR, result: errorMsg });
    }
  };
};

export const userActions = {
  login,
  logout,
  signup,
  update,
  resetPassword,
  resetPasswordConfirm,
};
