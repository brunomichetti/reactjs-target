import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { useIntl } from 'react-intl';

import SignUpOptions from './SignUpOptions.js';
import { userActions } from '../../actions/user.actions';
import '../../style/App.scss';
import './user-form.scss';
import { loginPageLink } from '../../constants/link.constants';
import FormInput from '../common/FormInput';

const LoginForm = () => {
  const intl = useIntl();

  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const alert = useSelector((state) => state.alert);

  const [cleanAlert, setCleanAlert] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const userRequest = useSelector((state) => state.authentication.userRequest);

  const showLoginAlert = isSubmitted && !userRequest && !cleanAlert && alert;

  const handleChange = ({ target }) => {
    if (!userRequest) {
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
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'userform.email.label.text',
        })}
        inputType="email"
        inputName="email"
        inputValue={email}
        inputOnChange={handleChange}
        error={isSubmitted && !email}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.email.text',
        })}
      />
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'userform.password.label.text',
        })}
        inputType="password"
        inputName="password"
        inputValue={password}
        inputOnChange={handleChange}
        error={isSubmitted && !password}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.pass.text',
        })}
      />
      <div>
        <button type="submit" className="user-form__btn-text">
          {intl.formatMessage({
            id: 'userform.signin.text',
          })}
        </button>
      </div>
      {userRequest && (
        <Loader type="ThreeDots" color="#2FBCF7" height={80} width={50} />
      )}
      {showLoginAlert && (
        <div className="user-form__alert"> {alert.message} </div>
      )}
      {/* href="/" until de feature is done */}
      <div className="user-form__forgot-pwd">
        <a href={loginPageLink}>
          {intl.formatMessage({
            id: 'userform.forgotpwd.text',
          })}
        </a>
      </div>
      <SignUpOptions intl={intl} />
    </form>
  );
};

export default LoginForm;
