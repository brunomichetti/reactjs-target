import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import { Link } from 'react-router-dom';

import '../../style/App.scss';
import './user-form.scss';
import { loginPageLink } from '../../constants/link.constants';
import UserFormInput from './UserFormInput';

const SignUpForm = () => {
  const genders = [
    { value: 'M', label: 'MALE' },
    { value: 'F', label: 'FEMALE' },
    { value: 'O', label: 'OTHER' },
  ];

  const { select_gender } = {};

  const [inputs, setInputs] = useState({
    full_name: '',
    email: '',
    password: '',
    confirm_password: '',
    gender: '',
  });
  const { full_name, email, password, confirm_password, gender } = inputs;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleChangeGender = (select_gender) => {
    setInputs((inputs) => ({ ...inputs, ['gender']: select_gender['value'] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return '';
  };

  return (
    <form align="center" className="user-form" onSubmit={handleSubmit}>
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.name.label.text" />}
        inputType="text"
        inputName="full_name"
        inputValue={full_name}
        inputOnChange={handleChange}
      />
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.email.label.text" />}
        inputType="email"
        inputName="email"
        inputValue={email}
        inputOnChange={handleChange}
      />
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.password.label.text" />}
        inputType="password"
        inputName="password"
        inputValue={password}
        inputOnChange={handleChange}
      />
      <UserFormInput
        inputLabel={<FormattedMessage id="userform.confirmpass.label.text" />}
        inputType="password"
        inputName="confirm_password"
        inputValue={confirm_password}
        inputOnChange={handleChange}
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
      <div>
        <button type="submit" className="user-form__btn-text">
          <FormattedMessage id="userform.signup.text" />
        </button>
      </div>
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
