import React from 'react';
import { components } from 'react-select';

const { Option } = components;
export const CustomSelectOption = (props) => (
  <div>
    <Option {...props}>
      {props.data.icon} {props.data.label}
    </Option>
    {props.data.hr && <hr></hr>}
  </div>
);

export const CustomSelectValue = (props) => (
  <div>
    {props.data.icon} {props.data.label}
  </div>
);
