import { targetService } from '../services/target.services';
import { handleCreateTargetError } from '../helpers/error.handler';
import { targetConstants } from '../constants/target.constants';
import { alertActions } from '../actions/alert.actions';

const create = (radius, title, topic, lat, lon) => {
  const request = () => {
    return { type: targetConstants.CREATE_TARGET_REQUEST };
  };
  const success = () => {
    return { type: targetConstants.CREATE_TARGET_SUCCESS };
  };
  const failure = () => {
    return { type: targetConstants.CREATE_TARGET_ERROR };
  };

  return async (dispatch) => {
    dispatch(request());
    try {
      await targetService.create(radius, title, topic, lat, lon);
      dispatch(success());
      dispatch(alertActions.success());
    } catch (error) {
      const errorMsg = handleCreateTargetError(error);
      dispatch(failure());
      dispatch(alertActions.error(errorMsg));
    }
  };
};

export const targetActions = {
  create,
};
