import React from 'react';

import './user-form.scss';

const UserFormInput = ({
  inputLabel,
  inputType,
  inputName,
  inputValue,
  inputPlaceHolder = '',
  inputOnChange,
  error = false,
  errorMsg = '',
}) => (
  <div>
    <p className="user-form__text">{inputLabel}</p>
    <input
      className="user-form__input"
      type={inputType}
      name={inputName}
      value={inputValue}
      onChange={inputOnChange}
      autoComplete="on"
      placeholder={inputPlaceHolder}
    />
    <div>{error && <div className="user-form__alert">{errorMsg}</div>}</div>
  </div>
);

export default UserFormInput;
