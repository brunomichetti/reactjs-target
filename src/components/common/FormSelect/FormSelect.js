import React from 'react';
import Select from 'react-select';
import { string, func, bool, oneOfType, object } from 'prop-types';

import 'style/user-form.scss';
import 'components/common/FormSelect/form-select.scss';
import {
  topicSelectShape,
  genderSelectShape,
  topicSelectArrayShape,
  genderSelectArrayShape,
  componentSelectShape,
} from 'constants/shapes';

const FormSelect = ({
  customClassName,
  customStyle,
  optionsSet,
  onChangeFunction,
  placeHolder = '',
  valueSelect,
  error = false,
  errorMsg = '',
  components = null,
  alertClassName = 'user-form__alert',
}) => (
  <div className="form-select">
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
  customClassName: string.isRequired,
  customStyle: object.isRequired,
  optionsSet: oneOfType([topicSelectArrayShape, genderSelectArrayShape]),
  onChangeFunction: func.isRequired,
  placeHolder: string,
  valueSelect: oneOfType([topicSelectShape, genderSelectShape]),
  error: bool,
  errorMsg: string,
  components: componentSelectShape,
  alertClassName: string,
};

export default FormSelect;
