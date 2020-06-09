import React, { useState } from "react";
import { userActions } from "../../actions/user.actions"
import { useDispatch } from "react-redux";
import "../../style/App.scss";
import "./login-form.scss"

function LoginForm() {

    // the inputs are going to be updated with setInputs function
    // initial state is empty email and password
    const [inputs, setInputs] = useState({email: '', password: ''});
    const { email, password } = inputs;

    // function to update the inputs when the user modifies the input
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    // get dispatch function of the Redux store
    const dispatch = useDispatch();

    // handle submit of the form
    function handleSubmit(e) {
        e.preventDefault();

        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }
  
     return (      
        <form align="center" class="login-form" onSubmit={handleSubmit}>

            <p class="login-form__text">EMAIL</p>
            <input class="login-form__input" type="email" value={email} onChange={handleChange}/>

            <p class="login-form__text">PASSWORD</p>
            <input class="login-form__input" type="password" value={password} onChange={handleChange}/>

            <div>
                <button type="submit" class="login-form__btn-text">SIGN IN</button>
            </div>

            {/* href="/" until de feature is done */}
            <div class="login-form__forgot-pwd">
                <a href="/">Forgot your password?</a>
            </div>
            
            <div class="login-form__facebook">
                <a href="/">CONNECT WITH FACEBOOK</a>
                <hr class="login-form__hr"></hr>
            </div>

            <div class="login-form__sign-up">
                <a href="/">SIGN UP</a>
            </div>

        </form>
     )
}

export default LoginForm;
