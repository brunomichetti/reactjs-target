import React from 'react';
import Select from 'react-select';

import '../users/user-form.scss';

const FormSelect = ({
  customClassName,
  customStyle,
  optionsSet,
  onChangeFunction,
  placeHolder,
  valueSelect,
  error = false,
  errorMsg = '',
}) => (
  <div align="center">
    <Select
      styles={customStyle}
      options={optionsSet}
      className={customClassName}
      onChange={onChangeFunction}
      placeholder={placeHolder}
      value={valueSelect}
    />
    {error && <div className="user-form__alert">{errorMsg}</div>}
  </div>
);

export default FormSelect;
