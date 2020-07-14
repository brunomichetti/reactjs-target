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
  components = null,
  alertClassName = 'user-form__alert',
}) => (
  <div align="center">
    <Select
      styles={customStyle}
      options={optionsSet}
      className={customClassName}
      onChange={onChangeFunction}
      placeholder={placeHolder}
      value={valueSelect}
      components={components}
    />
    {error && <div className={alertClassName}>{errorMsg}</div>}
  </div>
);

export default FormSelect;
