import { userConstants } from '../constants/user.constants';

export const user = (
  state = { loading: false, requestError: false, errorMsg: '', updated: false },
  { type, result }
) => {
  switch (type) {
    case userConstants.USER_REQUEST:
      return {
        ...state,
        requestError: false,
        loading: true,
      };
    case userConstants.USER_REQUEST_SUCCESS:
      return { ...state, loading: false, requestError: false, errorMsg: '' };
    case userConstants.USER_REQUEST_ERROR:
      return {
        loading: false,
        requestError: true,
        errorMsg: result,
      };
    case userConstants.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        requestError: false,
        updated: true,
      };
    case userConstants.USER_UPDATE_SUCCESS_FINISHED:
      return {
        ...state,
        updated: false,
      };
    default:
      return state;
  }
};
