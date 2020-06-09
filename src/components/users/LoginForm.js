import React from "react";
import "../../style/App.scss";
import "./login-form.scss"

function LoginForm() {          
     return (      
        <form align="center" class="login-form">

            <p class="login-form__text">EMAIL</p>
            <input class="login-form__input" type="email"/>

            <p class="login-form__text">PASSWORD</p>
            <input class="login-form__input" type="password"/>

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
