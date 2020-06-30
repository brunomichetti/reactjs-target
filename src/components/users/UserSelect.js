import React from 'react';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';

import './user-form.scss';

const UserSelect = ({
  optionsSet,
  onChangeFunction,
  placeHolderId,
  valueSelect,
}) => (
  <div align="center">
    <Select
      options={optionsSet}
      className="user-form__text user-form__select"
      onChange={onChangeFunction}
      placeholder={<FormattedMessage id={placeHolderId} />}
      value={valueSelect}
    />
  </div>
);

export default UserSelect;
