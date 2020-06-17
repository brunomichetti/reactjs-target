import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    // Check if the user is loggedIn
    const loggedIn = useSelector(state => state.authentication.loggingIn);
    return (
        <Route
        {...rest}
        render={props =>
            loggedIn ? (
            <Component {...props} />
            ) : (
            <Redirect to={{ pathname: "/" }} />
            )
        }
        />
    )
}

export default PrivateRoute;
