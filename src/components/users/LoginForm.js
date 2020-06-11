import React, { useState } from "react";
import { userActions } from "../../actions/user.actions"
import { useDispatch, useSelector } from "react-redux";
import "../../style/App.scss";
import "./login-form.scss";

function LoginForm() {
    // get the alert from the Redux store
    const alert = useSelector(state => state.alert);

    // the inputs are going to be updated with setInputs function
    // initial state is empty email and password
    const [inputs, setInputs] = useState({email: "", password: ""});
    const { email, password } = inputs;

    // cleanAlert is to remove error alert on change. This will be erased
    const [cleanAlert, setCleanAlert] = useState(false);

    // function to update the inputs when the user modifies the input
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
        setCleanAlert(true);
    }

    // get dispatch function of the Redux store
    const dispatch = useDispatch();

    // handle submit of the form
    function handleSubmit(e) {
        e.preventDefault();

        if (email && password) {
            setCleanAlert(false);
            dispatch(userActions.login(email, password));
        }
    }
  
     return (      
        <form align="center" className="login-form" onSubmit={handleSubmit}>

            <p className="login-form__text">EMAIL</p>
            <input className="login-form__input" type="email" name="email" value={email} onChange={handleChange}/>

            <p className="login-form__text">PASSWORD</p>
            <input className="login-form__input" type="password" name="password" value={password} onChange={handleChange} autoComplete="on"/>

            <div>
                <button type="submit" className="login-form__btn-text">SIGN IN</button>
            </div>

            {!(cleanAlert) && alert && alert.message && <div>{alert.message}</div>}

            {/* href="/" until de feature is done */}
            <div className="login-form__forgot-pwd">
                <a href="/">Forgot your password?</a>
            </div>
            
            <div className="login-form__facebook">
                <a href="/">CONNECT WITH FACEBOOK</a>
                <hr className="login-form__hr"></hr>
            </div>

            <div className="login-form__sign-up">
                <a href="/">SIGN UP</a>
            </div>

        </form>
     )
}

export default LoginForm;
