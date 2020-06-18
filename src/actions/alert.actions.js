import { alertConstants } from "../constants/alert.constants";

export const alertActions = {
    error
};

function error(message) {
    return { type: alertConstants.ERROR, message };
}
