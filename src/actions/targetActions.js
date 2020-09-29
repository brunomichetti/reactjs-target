import { targetService } from 'services/targetServices';
import { handleCreateTargetError } from 'helpers/errorHandlers';
import { targetActionTypesConstants } from 'constants/targetConstants';
import {
  userActionTypesConstants,
  userErrorConstants,
} from 'constants/userConstants';

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

const deleteTarget = (id) => async (dispatch) => {
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

export const targetActions = {
  create,
  deleteTarget,
};
