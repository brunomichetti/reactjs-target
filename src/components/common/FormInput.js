import React from 'react';

import '../users/user-form.scss';

const FormInput = ({
  labelClassName,
  inputClassName,
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
    <p className={labelClassName}>{inputLabel}</p>
    <input
      className={inputClassName}
      type={inputType}
      name={inputName}
      value={inputValue}
      onChange={inputOnChange}
      autoComplete="on"
      placeholder={inputPlaceHolder}
    />
    {error && <div className="user-form__alert">{errorMsg}</div>}
  </div>
);

export default FormInput;
