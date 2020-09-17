import { targetActionTypesConstants } from 'constants/target.constants';

const {
  CREATE_TARGET_SUCCESS,
  GET_TARGETS_SUCCESS,
  CLEAN_TARGETS,
  CREATE_ALERT_FINISHED,
} = targetActionTypesConstants;

export const target = (
  state = { createTargetSuccess: false, userTargets: [] },
  { type, result }
) => {
  switch (type) {
    case CREATE_TARGET_SUCCESS:
      return {
        createTargetSuccess: true,
        userTargets: result,
      };
    case GET_TARGETS_SUCCESS:
      return {
        ...state,
        userTargets: result,
      };
    case CLEAN_TARGETS:
      return {
        ...state,
        userTargets: [],
      };
    case CREATE_ALERT_FINISHED:
      return { ...state, createTargetSuccess: false };
    default:
      return state;
  }
};
