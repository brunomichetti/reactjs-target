import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { FormattedMessage } from "react-intl";

import { userActions } from "../../actions/user.actions";
import "../../style/App.scss";
import "./login-form.scss";

const LoginForm = () => {
    debugger;
    // get the alert from the Redux store
    const alert = useSelector(state => state.alert);
    // the inputs are going to be updated with setInputs function
    // initial state is empty email and password
    const [inputs, setInputs] = useState({email: "", password: ""});
    const { email, password } = inputs;
    // cleanAlert is to remove error alert on change. This will be erased
    const [cleanAlert, setCleanAlert] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    // function to update the inputs when the user modifies the input
    const handleChange = ({ target }) => {
        setIsSubmitted(false)
        if (!loggingIn) {
            const { name, value } = target;
            setInputs(inputs => ({ ...inputs, [name]: value }));
            setCleanAlert(true);
        }
    }
    // get dispatch function of the Redux store
    const dispatch = useDispatch();
    // handle submit of the form
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
        if (email && password) {
            setCleanAlert(false);
            dispatch(userActions.login(email, password));
        }
    }
    // get flag to see if the user is logging in
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    return (      
        <form align="center" className="login-form" onSubmit={handleSubmit}>
            <p className="login-form__text">EMAIL</p>
            <input className="login-form__input" type="email" name="email" value={email} onChange={handleChange}/>
            {isSubmitted && !email && <div className="login-form__alert"><FormattedMessage id="loginform.missing.email.text"/></div>}
            <p className="login-form__text">PASSWORD</p>
            <input className="login-form__input" type="password" name="password" value={password} onChange={handleChange} autoComplete="on"/>
            {isSubmitted && !password && <div className="login-form__alert"><FormattedMessage id="loginform.missing.pass.text"/></div>}
            <div>
                <button type="submit" className="login-form__btn-text"><FormattedMessage id="loginform.signin.text"/></button>
            </div>
            {loggingIn && <Loader type="ThreeDots" color="#2FBCF7" height={80} width={50}/>}
            {isSubmitted && !loggingIn && !cleanAlert && alert && <div className="login-form__alert"> {alert.message} </div>}
            {/* href="/" until de feature is done */}
            <div className="login-form__forgot-pwd">
                <a href="/"><FormattedMessage id="loginform.forgotpwd.text"/></a>
            </div>
            <div className="login-form__facebook">
                <a href="/"><FormattedMessage id="loginform.connectfb.text"/></a>
                <hr className="login-form__hr"></hr>
            </div>
            <div className="login-form__sign-up">
                <a href="/"><FormattedMessage id="loginform.signup.text"/></a>
            </div>
        </form>
    )
}

export default LoginForm;
