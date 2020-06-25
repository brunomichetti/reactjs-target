import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import { Link } from 'react-router-dom';

import '../../style/App.scss';
import './user-form.scss';
import { loginPageLink } from '../../constants/link.constants';

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
      <p className="user-form__text">NAME</p>
      <input
        className="user-form__input"
        type="text"
        name="full_name"
        value={full_name}
        onChange={handleChange}
      />
      <p className="user-form__text">EMAIL</p>
      <input
        className="user-form__input"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <p className="user-form__text">PASSWORD</p>
      <input
        className="user-form__input"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <p className="user-form__text">CONFIRM PASSWORD</p>
      <input
        className="user-form__input"
        type="password"
        name="confirm_password"
        value={confirm_password}
        onChange={handleChange}
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
          <FormattedMessage id="loginform.signup.text" />
        </button>
      </div>
      <hr className="user-form__hr" />
      <div className="user-form__text">
        <Link to={loginPageLink}>
          <FormattedMessage id="loginform.signin.text" />
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
