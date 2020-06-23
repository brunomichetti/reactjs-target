import { loginErrorConstants } from "../components/users/login.error.constants";


const handleLoginError = (error) => {
    const errorResponse = error.response;
    if (errorResponse.status === 400 && errorResponse.data.non_field_errors) {
        return loginErrorConstants.LOGIN_ERROR_CREDENTIALS
    }else{
        return loginErrorConstants.LOGIN_SERVER_ERROR
    }
}

export default handleLoginError;
