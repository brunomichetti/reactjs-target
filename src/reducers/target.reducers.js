import { targetConstants } from '../constants/target.constants';

export const target = (state = {}, { type, result }) => {
  switch (type) {
    case targetConstants.CREATE_TARGET_REQUEST:
      return {
        createTargetRequest: true,
      };
    case targetConstants.CREATE_TARGET_SUCCESS:
      return {
        createTargetSuccess: true,
      };
    case targetConstants.CREATE_TARGET_ERROR:
      return {
        createTargetError: true,
        errorMsg: result,
      };
    default:
      return state;
  }
};
