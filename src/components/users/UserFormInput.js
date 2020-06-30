import React from 'react';
import { FormattedMessage } from 'react-intl';

import './user-form.scss';

const UserFormInput = ({
  inputLabel,
  inputType,
  inputName,
  inputValue,
  inputPlaceHolder = '',
  inputOnChange,
  error = false,
  errorId = '',
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
    <div>
      {error && (
        <div className="user-form__alert">
          <FormattedMessage id={errorId} />
        </div>
      )}
    </div>
  </div>
);

export default UserFormInput;
