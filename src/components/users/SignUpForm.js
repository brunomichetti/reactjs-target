import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import 'components/users/user-form.scss';
import { loginPageLink } from 'constants/link.constants';
import { userActions } from 'actions/user.actions';
import FormInput from 'components/common/FormInput';
import FormSelect from 'components/common/FormSelect';
import { genderSelectStyle } from 'components/users/genderSelectStyle';
import { userRequest } from 'actions/user.actions';
import { genders } from 'components/users/gendersList';
import { userConstants } from 'constants/user.constants';
import {
  validate,
  emailConstraints,
  passwordConstraints,
  passwordConfirmConstraints,
  nameConstraints,
  genderConstraints,
  equalPasswordsConstraints,
  signupConstraints,
} from 'helpers/constraints';

const SignUpForm = () => {
  const intl = useIntl();

  const { selectGender } = {};

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    gender: '',
  });
  const { name, email, password, passwordConfirm, gender } = inputs;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const { requestError, errorMsg } = useSelector((state) => state.user);

  const handleChange = ({ target: { name, value } }) => {
    if (requestError) {
      dispatch({ type: userConstants.USER_CLEAN_ALERT });
    }
    setIsSubmitted(false);
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleChangeGender = (selectGender) => {
    if (requestError) {
      dispatch({ type: userConstants.USER_CLEAN_ALERT });
    }
    setIsSubmitted(false);
    setInputs((inputs) => ({ ...inputs, gender: selectGender['value'] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    var errors = validate(inputs, signupConstraints);
    if (!errors) {
      dispatch(userRequest());
      dispatch(
        userActions.signup(name, email, password, passwordConfirm, gender)
      );
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'userform.name.label.text',
        })}
        inputType="text"
        inputName="name"
        inputValue={name}
        inputOnChange={handleChange}
        error={isSubmitted && validate(inputs, nameConstraints)}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.name.text',
        })}
      />
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
        inputPlaceHolder={intl.formatMessage({
          id: 'userform.pass.placeholder.text',
        })}
        error={isSubmitted && validate(inputs, passwordConstraints)}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.pass.text',
        })}
      />
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'userform.confirmpass.label.text',
        })}
        inputType="password"
        inputName="passwordConfirm"
        inputValue={passwordConfirm}
        inputOnChange={handleChange}
        error={isSubmitted && validate(inputs, passwordConfirmConstraints)}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.pass2.text',
        })}
      />
      <div>
        {isSubmitted && validate(inputs, equalPasswordsConstraints) && (
          <div className="user-form__alert">
            {intl.formatMessage({
              id: 'userform.not.matching.passwords.text',
            })}
          </div>
        )}
      </div>
      <p className="user-form__text">
        {intl.formatMessage({
          id: 'userform.gender.label.text',
        })}
      </p>
      <FormSelect
        customStyle={genderSelectStyle}
        customClassName="user-form__text user-form__select"
        optionsSet={genders}
        onChangeFunction={handleChangeGender}
        placeHolder={intl.formatMessage({
          id: 'userform.select.gender.text',
        })}
        valueSelect={selectGender}
        error={isSubmitted && validate(inputs, genderConstraints)}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.gender.text',
        })}
      />
      <div>
        <button type="submit" className="user-form__btn-text">
          {intl.formatMessage({
            id: 'userform.signup.text',
          })}
        </button>
      </div>
      {isSubmitted && requestError && (
        <div className="user-form__alert"> {errorMsg} </div>
      )}
      <hr className="user-form__hr" />
      <div className="user-form__text">
        <Link to={loginPageLink}>
          {intl.formatMessage({
            id: 'userform.signin.text',
          })}
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
