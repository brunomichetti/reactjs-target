import { userConstants } from '../constants/user.constants';

export const user = (state = {}, { type, result }) => {
  switch (type) {
    case userConstants.USER_REQUEST:
      return {
        userRequest: true,
      };
    case userConstants.USER_REQUEST_SUCCESS:
      return {};
    case userConstants.USER_REQUEST_ERROR:
      return {
        requestError: true,
        errorMsg: result,
      };
    default:
      return state;
  }
};
