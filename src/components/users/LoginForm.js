import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { FormattedMessage } from 'react-intl';

import SignUpOptions from './SignUpOptions.js';
import { userActions } from '../../actions/user.actions';
import '../../style/App.scss';
import './user-form.scss';

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
      <p className="user-form__text">EMAIL</p>
      <input
        className="user-form__input"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      {isSubmitted && !email && (
        <div className="user-form__alert">
          <FormattedMessage id="loginform.missing.email.text" />
        </div>
      )}
      <p className="user-form__text">PASSWORD</p>
      <input
        className="user-form__input"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        autoComplete="on"
      />
      {isSubmitted && !password && (
        <div className="user-form__alert">
          <FormattedMessage id="loginform.missing.pass.text" />
        </div>
      )}
      <div>
        <button type="submit" className="user-form__btn-text">
          <FormattedMessage id="loginform.signin.text" />
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
        <a href="/">
          <FormattedMessage id="loginform.forgotpwd.text" />
        </a>
      </div>
      <SignUpOptions />
    </form>
  );
};

export default LoginForm;
