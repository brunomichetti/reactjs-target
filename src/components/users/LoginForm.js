import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { FormattedMessage } from 'react-intl';

import SignUpOptions from './SignUpOptions.js';
import { userActions } from '../../actions/user.actions';
import '../../style/App.scss';
import './user-form.scss';
import { loginPageLink } from '../../constants/link.constants';
import UserFormInput from './UserFormInput';

const LoginForm = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const alert = useSelector((state) => state.alert);

  const [cleanAlert, setCleanAlert] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const loggingIn = useSelector((state) => state.authentication.loggingIn);

  const showLoginAlert = isSubmitted && !loggingIn && !cleanAlert && alert;

  const handleChange = ({ target }) => {
    setIsSubmitted(false);
    if (!loggingIn) {
      const { name, value } = target;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
      setCleanAlert(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (email && password) {
      setCleanAlert(false);
      dispatch(userActions.login(email, password));
    }
  };

  return (
    <form align="center" className="user-form" onSubmit={handleSubmit}>
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.email.label.text" />}
        inputType="email"
        inputName="email"
        inputValue={email}
        inputOnChange={handleChange}
      />
      {isSubmitted && !email && (
        <div className="user-form__alert">
          <FormattedMessage id="userform.missing.email.text" />
        </div>
      )}
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.password.label.text" />}
        inputType="password"
        inputName="password"
        inputValue={password}
        inputOnChange={handleChange}
      />
      {isSubmitted && !password && (
        <div className="user-form__alert">
          <FormattedMessage id="userform.missing.pass.text" />
        </div>
      )}
      <div>
        <button type="submit" className="user-form__btn-text">
          <FormattedMessage id="userform.signin.text" />
        </button>
      </div>
      {loggingIn && (
        <Loader type="ThreeDots" color="#2FBCF7" height={80} width={50} />
      )}
      {showLoginAlert && (
        <div className="user-form__alert"> {alert.message} </div>
      )}
      {/* href="/" until de feature is done */}
      <div className="user-form__forgot-pwd">
        <a href={loginPageLink}>
          <FormattedMessage id="userform.forgotpwd.text" />
        </a>
      </div>
      <SignUpOptions />
    </form>
  );
};

export default LoginForm;
