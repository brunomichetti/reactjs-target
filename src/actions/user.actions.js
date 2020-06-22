import { userConstants } from "../constants/user.constants";
import { userService } from "../services/user.services";
import { history } from "../helpers/history";
import { alertActions } from "../actions/alert.actions";

// Actions creator, the alerts will be removed
const login = (email, password) => {
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } };
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } };
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } };

    return async dispatch => {
        dispatch(request({ email }));
        try {
            const user = await userService.login(email, password)
            dispatch(success(user));
            dispatch(alertActions.success());
            history.push("/home");
        } catch(error) {
            dispatch(failure(error));
            dispatch(alertActions.error(error));
        }
    };
}

const logout = () => {
    function request() { return { type: userConstants.LOGOUT_REQUEST } };
    function logoutResult() { return { type: userConstants.LOGOUT } };

    return async dispatch => {
        dispatch(request());
        await userService.logout();
        dispatch(logoutResult);
        dispatch(alertActions.success());
        history.push("/");
    };
}

export const userActions = {
    login,
    logout
};
