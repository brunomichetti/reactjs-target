import { userConstants } from '../constants/user.constants';

export const user = (
  state = { loading: false, requestError: false, errorMsg: '' },
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
      return { loading: false, requestError: false, errorMsg: '' };
    case userConstants.USER_REQUEST_ERROR:
      return {
        loading: false,
        requestError: true,
        errorMsg: result,
      };
    default:
      return state;
  }
};
