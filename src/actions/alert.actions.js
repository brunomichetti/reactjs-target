import { alertConstants } from '../constants/alert.constants';

const success = () => {
  return { type: alertConstants.SUCCESS };
};

const error = (message) => {
  return { type: alertConstants.ERROR, message };
};

export const alertActions = {
  success,
  error,
};
