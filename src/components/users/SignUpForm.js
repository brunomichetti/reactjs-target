import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '../../style/App.scss';
import './user-form.scss';
import { loginPageLink } from '../../constants/link.constants';
import UserFormInput from './UserFormInput';
import { userActions } from '../../actions/user.actions';
import UserFormInputError from './UserFormInputError';

const SignUpForm = () => {
  const genders = [
    { value: 'male', label: 'MALE' },
    { value: 'female', label: 'FEMALE' },
    { value: 'not_specified', label: 'NOT SPECIFIED' },
  ];

  const { select_gender } = {};

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    gender: '',
  });
  const { name, email, password1, password2, gender } = inputs;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const alert = useSelector((state) => state.alert);

  const [cleanAlert, setCleanAlert] = useState(false);

  const userRequest = useSelector((state) => state.authentication.userRequest);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleChangeGender = (select_gender) => {
    setInputs((inputs) => ({ ...inputs, ['gender']: select_gender['value'] }));
  };

  const missingFields = !name || !email || !password1 || !password2 || !gender;

  const equalPasswords = password1 === password2;

  const showSignupAlert = isSubmitted && !userRequest && !cleanAlert && alert;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!missingFields && equalPasswords) {
      dispatch(userActions.signup(name, email, password1, password2, gender));
    }
  };

  return (
    <form align="center" className="user-form" onSubmit={handleSubmit}>
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.name.label.text" />}
        inputType="text"
        inputName="name"
        inputValue={name}
        inputOnChange={handleChange}
      />
      <UserFormInputError
        error={isSubmitted && !name}
        errorId="userform.missing.name.text"
      />
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.email.label.text" />}
        inputType="email"
        inputName="email"
        inputValue={email}
        inputOnChange={handleChange}
      />
      <UserFormInputError
        error={isSubmitted && !email}
        errorId="userform.missing.email.text"
      />
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.password.label.text" />}
        inputType="password"
        inputName="password1"
        inputValue={password1}
        inputOnChange={handleChange}
      />
      <UserFormInputError
        error={isSubmitted && !password1}
        errorId="userform.missing.pass.text"
      />
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.confirmpass.label.text" />}
        inputType="password"
        inputName="password2"
        inputValue={password2}
        inputOnChange={handleChange}
      />
      <UserFormInputError
        error={isSubmitted && !password2}
        errorId="userform.missing.pass2.text"
      />
      <UserFormInputError
        error={isSubmitted && password1 && password2 && !equalPasswords}
        errorId="userform.not.matching.passwords.text"
      />
      <p className="user-form__text">GENDER</p>
      <div align="center">
        <Select
          options={genders}
          className="user-form__text user-form__select"
          onChange={handleChangeGender}
          placeholder="SELECT A GENDER"
          value={select_gender}
        />
      </div>
      <UserFormInputError
        error={isSubmitted && !gender}
        errorId="userform.missing.gender.text"
      />
      <div>
        <button type="submit" className="user-form__btn-text">
          <FormattedMessage id="userform.signup.text" />
        </button>
      </div>
      {showSignupAlert && (
        <div className="user-form__alert"> {alert.message} </div>
      )}
      <hr className="user-form__hr" />
      <div className="user-form__text">
        <Link to={loginPageLink}>
          <FormattedMessage id="userform.signin.text" />
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
