import React from 'react';
import PropTypes from 'prop-types';

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

FormInput.propTypes = {
  labelClassName: PropTypes.object,
  inputClassName: PropTypes.object,
  inputLabel: PropTypes.object,
  inputType: PropTypes.object,
  inputName: PropTypes.object,
  inputValue: PropTypes.object,
  inputPlaceHolder: PropTypes.object,
  inputOnChange: PropTypes.object,
  error: PropTypes.object,
  errorMsg: PropTypes.object,
};

export default FormInput;
