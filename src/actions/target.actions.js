import { targetService } from '../services/target.services';
import { handleCreateTargetError } from '../helpers/error.handler';
import { targetConstants } from '../constants/target.constants';

const create = (radius, title, topic, lat, lon) => {
  return async (dispatch) => {
    dispatch({ type: targetConstants.CREATE_TARGET_REQUEST });
    try {
      await targetService.create(radius, title, topic, lat, lon);
      dispatch({ type: targetConstants.CREATE_TARGET_SUCCESS });
    } catch (error) {
      const errorMsg = handleCreateTargetError(error);
      dispatch({ type: targetConstants.CREATE_TARGET_ERROR, result: errorMsg });
    }
  };
};

export const targetActions = {
  create,
};
