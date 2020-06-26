import React from 'react';

import './user-form.scss';

const UserFormInput = ({
  inputLabel,
  inputType,
  inputName,
  inputValue,
  inputOnChange,
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
    />
  </div>
);

export default UserFormInput;
