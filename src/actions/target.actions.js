import { targetService } from '../services/target.services';
import { handleCreateTargetError } from '../helpers/error.handler';
import { targetConstants } from '../constants/target.constants';
import { userConstants } from '../constants/user.constants';

const create = (radius, title, topic, lat, lon) => {
  return async (dispatch) => {
    try {
      await targetService.create(radius, title, topic, lat, lon);
      const { data: targets } = await targetService.getTargets();
      dispatch({
        type: targetConstants.CREATE_TARGET_SUCCESS,
        result: targets,
      });
      dispatch({ type: userConstants.USER_REQUEST_SUCCESS });
    } catch (error) {
      const errorMsg = handleCreateTargetError(error);
      dispatch({ type: userConstants.USER_REQUEST_ERROR, result: errorMsg });
    }
  };
};

export const targetActions = {
  create,
};
