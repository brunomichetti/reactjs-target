import React from 'react';
import { string, func, bool, number, oneOfType } from 'prop-types';

import 'components/users/user-form.scss';

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

FormInput.propTypes = {
  labelClassName: string.isRequired,
  inputClassName: string.isRequired,
  inputLabel: string.isRequired,
  inputType: string.isRequired,
  inputName: string.isRequired,
  inputValue: oneOfType([string, number]),
  inputPlaceHolder: string,
  inputOnChange: func.isRequired,
  error: bool,
  errorMsg: string,
};

export default FormInput;
