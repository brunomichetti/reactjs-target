import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

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

FormSelect.propTypes = {
  customClassName: PropTypes.object,
  customStyle: PropTypes.object,
  optionsSet: PropTypes.object,
  onChangeFunction: PropTypes.object,
  placeHolder: PropTypes.object,
  valueSelect: PropTypes.object,
  error: PropTypes.object,
  errorMsg: PropTypes.object,
  components: PropTypes.object,
  alertClassName: PropTypes.object,
};

export default FormSelect;
