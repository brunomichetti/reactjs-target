import { targetConstants } from '../constants/target.constants';

export const target = (state = {}, action) => {
  switch (action.type) {
    case targetConstants.CREATE_TARGET_REQUEST:
      return {
        createTargetRequest: true,
      };
    case targetConstants.CREATE_TARGET_SUCCESS:
      return {
        createTargetSuccess: true,
      };
    default:
      return {};
  }
};
