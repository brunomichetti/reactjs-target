import { loginErrorConstants } from "../components/users/login.error.constants";

const login = async(email, password) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    };
    const response = await fetch("/api/v1/rest-auth/login/", requestOptions)
    const user = await handleResponse(response);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const logout = async() => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    };
    await fetch("/api/v1/rest-auth/logout/", requestOptions);
    localStorage.removeItem("user");
}

const handleResponse = async(response) => {
    const text = await response.text()
    const data = text && JSON.parse(text);
    if (!response.ok) {
        if (response.status === 400 && data.non_field_errors[0]) {
            throw loginErrorConstants.LOGIN_ERROR_CREDENTIALS
        }else{
            throw loginErrorConstants.LOGIN_SERVER_ERROR
        }
    }
    return data;
}

export const userService = {
    login,
    logout
};
