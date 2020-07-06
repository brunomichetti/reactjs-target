import { black } from 'color-name';

export const topicSelectStyle = {
  control: (base) => ({
    ...base,
    borderColor: 'black',
    borderRadius: 0,
    borderStyle: 'solid',
    width: 294,
    height: 28,
    // This line disable the blue border
    boxShadow: 'none',
  }),

  menuList: (provided, state) => ({
    ...provided,
    fontSize: 12,
    textAlign: 'left',
    overflow: 'hidden',
  }),

  option: (provided, state) => ({
    ...provided,
    color: black,
    backgroundColor: state.isFocused ? '#F4F4F4' : null,
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: black,
    padding: 41,
    fontSize: 12,
  }),

  indicatorSeparator: () => {}, // Remove the "|"

  // Remove the down arrow
  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles,
    '& svg': { display: 'none' },
  }),
};
