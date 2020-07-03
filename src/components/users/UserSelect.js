import React from 'react';
import Select from 'react-select';

import './user-form.scss';
import { selectCustomStyle } from './selectCustomStyle';

const UserSelect = ({
  optionsSet,
  onChangeFunction,
  placeHolder,
  valueSelect,
  error = false,
  errorMsg = '',
}) => (
  <div align="center">
    <Select
      styles={selectCustomStyle}
      options={optionsSet}
      className="user-form__text user-form__select"
      onChange={onChangeFunction}
      placeholder={placeHolder}
      value={valueSelect}
    />
    {error && <div className="user-form__alert">{errorMsg}</div>}
  </div>
);

export default UserSelect;
