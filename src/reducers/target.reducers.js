import { targetConstants } from '../constants/target.constants';

export const target = (state = {}, { type, result }) => {
  switch (type) {
    case targetConstants.CREATE_TARGET_SUCCESS:
    case targetConstants.GET_TARGETS_SUCCESS:
      return {
        createTargetSuccess: true,
        userTargets: result,
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
