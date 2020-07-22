import { targetConstants } from '../constants/target.constants';

export const target = (
  state = { createTargetSuccess: false, userTargets: [] },
  { type, result }
) => {
  switch (type) {
    case targetConstants.CREATE_TARGET_SUCCESS:
      return {
        createTargetSuccess: true,
        userTargets: result,
      };
    case targetConstants.GET_TARGETS_SUCCESS:
      return {
        ...state,
        userTargets: result,
      };
    case targetConstants.CLEAN_TARGETS:
      return {
        ...state,
        userTargets: [],
      };
    case targetConstants.CREATE_ALERT_FINISHED:
      return { ...state, createTargetSuccess: false };
    default:
      return state;
  }
};
