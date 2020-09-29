import { targetActionTypesConstants } from 'constants/targetConstants';

const {
  CREATE_TARGET_SUCCESS,
  GET_TARGETS_SUCCESS,
  CLEAN_TARGETS,
  CREATE_ALERT_FINISHED,
  GET_MATCHES_SUCCESS,
  CLEAN_MATCHES,
  TARGET_DELETED,
} = targetActionTypesConstants;

export const target = (
  state = {
    createTargetSuccess: false,
    targetDeleted: false,
    userTargets: [],
    userMatches: [],
  },
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
        targetDeleted: false,
      };
    case CLEAN_TARGETS:
      return {
        ...state,
        userTargets: [],
      };
    case GET_MATCHES_SUCCESS:
      return {
        ...state,
        userMatches: result,
      };
    case CLEAN_MATCHES:
      return {
        ...state,
        userMatches: [],
      };
    case CREATE_ALERT_FINISHED:
      return { ...state, createTargetSuccess: false };
    case TARGET_DELETED:
      return { ...state, targetDeleted: true };
    default:
      return state;
  }
};
