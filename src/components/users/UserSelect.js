import React from 'react';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';

import './user-form.scss';
import { black } from 'color-name';

const customStyle = {
  control: (base) => ({
    ...base,
    borderColor: 'black',
    borderRadius: 0,
    borderStyle: 'solid',
    width: 247,
    height: 28,
    // This line disable the blue border
    boxShadow: 'none',
  }),

  menuList: (provided, state) => ({
    ...provided,
    fontSize: 14,
  }),

  option: (provided, state) => ({
    ...provided,
    color: black,
    backgroundColor: state.isFocused ? '#2FBCF7' : null,
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: black,
    padding: 49,
    fontSize: 14,
  }),

  indicatorSeparator: () => {}, // Remove the "|"

  // Remove the down arrow
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    '& svg': { display: 'none' },
  }),
};

const UserSelect = ({
  optionsSet,
  onChangeFunction,
  placeHolderId,
  valueSelect,
}) => (
  <div align="center">
    <Select
      styles={customStyle}
      options={optionsSet}
      className="user-form__text user-form__select"
      onChange={onChangeFunction}
      placeholder={<FormattedMessage id={placeHolderId} />}
      value={valueSelect}
    />
  </div>
);

export default UserSelect;
