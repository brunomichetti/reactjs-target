import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { isEmpty, omit } from 'lodash';
import { validate } from 'validate.js';

import 'style/App.scss';
import 'components/users/user-form.scss';
import { userActions } from 'actions/user.actions';
import FormInput from 'components/common/FormInput';
import { userRequest } from 'actions/user.actions';
import CustomLoader from 'components/common/CustomLoader';
import { loginConstraints } from 'helpers/users-constraints';
import {
  userActionTypesConstants,
  userFormNames,
} from 'constants/user.constants';

const LoginForm = () => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const [errors, setErrors] = useState({});

  const { EMAIL, PASSWORD } = userFormNames;

  const { USER_CLEAN_ALERT } = userActionTypesConstants;

  const { loading, requestError, errorMsg } = useSelector(
    (state) => state.user
  );

  const handleChange = ({ target: { name, value } }) => {
    if (requestError) {
      dispatch({ type: USER_CLEAN_ALERT });
    }
    setErrors(omit(errors, name));
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentErrors = validate(inputs, loginConstraints) || {};
    if (isEmpty(currentErrors)) {
      dispatch(userRequest());
      dispatch(userActions.login(email, password));
    }
    setErrors(currentErrors);
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
        inputName={EMAIL}
        inputValue={email}
        inputOnChange={handleChange}
        error={EMAIL in errors}
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
        inputName={PASSWORD}
        inputValue={password}
        inputOnChange={handleChange}
        error={PASSWORD in errors}
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
      {requestError && <div className="user-form__alert"> {errorMsg} </div>}
    </form>
  );
};

export default LoginForm;
