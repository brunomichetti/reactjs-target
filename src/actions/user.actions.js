import { userActionTypesConstants } from 'constants/user.constants';
import { userService } from 'services/user.services';
import { history } from 'helpers/history';
import {
  handleLoginError,
  handleSignupError,
  handleChangePasswordError,
  handleResetPasswordError,
  handleResetPasswordConfirmError,
} from 'helpers/error.handler';
import { homePageLink, loginPageLink } from 'constants/link.constants';
import { targetService } from 'services/target.services';
import { targetActionTypesConstants } from 'constants/target.constants';

const {
  USER_REQUEST,
  USER_REQUEST_SUCCESS,
  USER_REQUEST_ERROR,
  USER_SIGNUP_SUCCESS,
  USER_UPDATE_SUCCESS,
  USER_RESET_PASSWORD_EMAIL_SENT,
} = userActionTypesConstants;

const {
  GET_TARGETS_SUCCESS,
  CLEAN_TARGETS,
  GET_MATCHES_SUCCESS,
  CLEAN_MATCHES,
} = targetActionTypesConstants;

export const userRequest = () => ({
  type: USER_REQUEST,
});

const successToHomePage = async (user, dispatch) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('refreshToken', user.refresh_token);
  localStorage.setItem('accessToken', user.access_token);
  dispatch({ type: USER_REQUEST_SUCCESS });
  history.push(homePageLink);
};

const login = (email, password) => {
  return async (dispatch) => {
    try {
      const { data: user } = await userService.login(email, password);
      successToHomePage(user, dispatch);
    } catch (error) {
      const errorMsg = handleLoginError(error);
      dispatch({
        type: USER_REQUEST_ERROR,
        result: errorMsg,
      });
    }
  };
};

const logout = () => {
  return async (dispatch) => {
    await userService.logout();
    dispatch({ type: USER_REQUEST_SUCCESS });
    dispatch({ type: CLEAN_TARGETS });
    dispatch({ type: CLEAN_MATCHES });
    dispatch({ type: CLEAN_TARGETS });
    localStorage.removeItem('user');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
    history.push(loginPageLink);
  };
};

const signup = (name, email, password, passwordConfirm, gender) => {
  return async (dispatch) => {
    try {
      await userService.signup(name, email, password, passwordConfirm, gender);
      dispatch({ type: USER_SIGNUP_SUCCESS });
    } catch (error) {
      const errorMsg = handleSignupError(error);
      dispatch({
        type: USER_REQUEST_ERROR,
        result: errorMsg,
      });
    }
  };
};

const update = (
  name,
  gender,
  password,
  passwordConfirm,
  newImg,
  changedNameOrGender
) => {
  return async (dispatch) => {
    try {
      if (password) {
        await userService.changePassword(password, passwordConfirm);
      }
      if (changedNameOrGender || newImg) {
        const { data: user } = await userService.update(name, gender, newImg);
        const storedUser = JSON.parse(localStorage.getItem('user'));
        storedUser.user = user;
        localStorage.setItem('user', JSON.stringify(storedUser));
      }
      dispatch({ type: USER_UPDATE_SUCCESS });
      history.push(homePageLink);
    } catch (error) {
      const errorMsg = handleChangePasswordError(error);
      dispatch({
        type: USER_REQUEST_ERROR,
        result: errorMsg,
      });
    }
  };
};

const resetPassword = (email) => {
  return async (dispatch) => {
    try {
      await userService.resetPassword(email);
      dispatch({
        type: USER_RESET_PASSWORD_EMAIL_SENT,
      });
      history.push(loginPageLink);
    } catch (error) {
      const errorMsg = handleResetPasswordError(error);
      dispatch({
        type: USER_REQUEST_ERROR,
        result: errorMsg,
      });
    }
  };
};

const resetPasswordConfirm = (password, passwordConfirm, urlUid, urlToken) => {
  return async (dispatch) => {
    try {
      await userService.resetPasswordConfirm(
        password,
        passwordConfirm,
        urlUid,
        urlToken
      );
      dispatch({ type: USER_UPDATE_SUCCESS });
      history.push(loginPageLink);
    } catch (error) {
      const errorMsg = handleResetPasswordConfirmError(error);
      dispatch({
        type: USER_REQUEST_ERROR,
        result: errorMsg,
      });
    }
  };
};

const getTargets = () => {
  return async (dispatch) => {
    const { data: targets } = await targetService.getTargets();
    dispatch({
      type: GET_TARGETS_SUCCESS,
      result: targets,
    });
  };
};

const getMatches = () => {
  return async (dispatch) => {
    const { data: matches } = await targetService.getMatches();
    dispatch({
      type: GET_MATCHES_SUCCESS,
      result: matches,
    });
  };
};

export const userActions = {
  login,
  logout,
  signup,
  update,
  resetPassword,
  resetPasswordConfirm,
  getTargets,
  getMatches,
};
