import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import 'components/users/user-form.scss';
import { userActions } from 'actions/user.actions';
import FormInput from 'components/common/FormInput';
import { userRequest } from 'actions/user.actions';
import CustomLoader from 'components/common/CustomLoader';
import {
  validate,
  emailConstraints,
  passwordConstraints,
  loginConstraints,
} from 'helpers/constraints';
import { userConstants } from 'constants/user.constants';

const LoginForm = () => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { loading, requestError, errorMsg } = useSelector(
    (state) => state.user
  );

  const handleChange = ({ target: { name, value } }) => {
    if (requestError) {
      dispatch({ type: userConstants.USER_CLEAN_ALERT });
    }
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    var errors = validate(inputs, loginConstraints);
    if (!errors) {
      dispatch(userRequest());
      dispatch(userActions.login(email, password));
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
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
        error={isSubmitted && validate(inputs, emailConstraints)}
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
        error={isSubmitted && validate(inputs, passwordConstraints)}
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
      {loading && <CustomLoader />}
      {isSubmitted && requestError && (
        <div className="user-form__alert"> {errorMsg} </div>
      )}
    </form>
  );
};

export default LoginForm;
