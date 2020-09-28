import { targetService } from 'services/target.services';
import { handleCreateTargetError } from 'helpers/error.handler';
import { targetActionTypesConstants } from 'constants/target.constants';
import { userActionTypesConstants } from 'constants/user.constants';
import { userErrorConstants } from 'constants/user.request.error.constants';

const { USER_REQUEST_SUCCESS, USER_REQUEST_ERROR } = userActionTypesConstants;
const { CREATE_TARGET_SUCCESS, TARGET_DELETED } = targetActionTypesConstants;

const create = (radius, title, topic, lat, lon) => {
  return async (dispatch) => {
    try {
      await targetService.create(radius, title, topic, lat, lon);
      const { data: targets } = await targetService.getTargets();
      dispatch({
        type: CREATE_TARGET_SUCCESS,
        result: targets,
      });
      dispatch({ type: USER_REQUEST_SUCCESS });
    } catch (error) {
      const errorMsg = handleCreateTargetError(error);
      dispatch({
        type: USER_REQUEST_ERROR,
        result: errorMsg,
      });
    }
  };
};

const deleteTarget = (id) => {
  return async (dispatch) => {
    try {
      await targetService.deleteTarget(id);
      dispatch({ type: TARGET_DELETED });
    } catch (error) {
      dispatch({
        type: USER_REQUEST_ERROR,
        result: userErrorConstants.DELETE_TARGET_ERROR,
      });
    }
  };
};

export const targetActions = {
  create,
  deleteTarget,
};
