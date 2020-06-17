import { userConstants } from "../constants/user.constants";
import { userService } from "../services/user.services";
import { history } from "../helpers/history";
import { alertActions } from "../actions/alert.actions";

export const userActions = {
    login,
};

// Actions creator, the alerts will be removed
function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push("/home");
                    dispatch(alertActions.success("Login successful")); //This will be removed
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString())); //This will be removed
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}