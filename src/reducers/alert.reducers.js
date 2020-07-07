import { alertConstants } from '../constants/alert.constants';

export const alert = (state = {}, action) => {
  switch (action.type) {
    case alertConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    default:
      return {};
  }
};
