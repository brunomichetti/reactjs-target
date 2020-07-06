import React, { useState } from 'react';

import FormInput from '../common/FormInput';
import FormSelect from '../common/FormSelect';
import { topicSelectStyle } from './topicSelectStyle';
import {
  CustomSelectOption,
  CustomSelectValue,
} from '../common/customIconOption';
import { topics } from './topicsList';
import './create-target-form.scss';

const CreateTargetForm = ({ intl }) => {
  const handleSubmit = () => {};

  const { select_topic } = {};

  const [inputs, setInputs] = useState({
    radius: '',
    title: '',
    topic: '',
  });

  const { radius, title, topic } = inputs;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleChangeTopic = (select_topic) => {
    setInputs((inputs) => ({ ...inputs, topic: select_topic['value'] }));
  };
  return (
    <form className="create-target-form" onSubmit={handleSubmit}>
      <FormInput
        labelClassName="create-target-form__text"
        inputClassName="create-target-form__input"
        inputLabel={intl.formatMessage({
          id: 'createtarget.specify.area.text',
        })}
        inputType="number"
        inputName="radius"
        inputValue={radius}
        inputOnChange={handleChange}
      />
      <FormInput
        labelClassName="create-target-form__text"
        inputClassName="create-target-form__input"
        inputLabel={intl.formatMessage({
          id: 'createtarget.target.title.text',
        })}
        inputType="text"
        inputName="title"
        inputValue={title}
        inputOnChange={handleChange}
        inputPlaceHolder={intl.formatMessage({
          id: 'createtarget.title.placeholder.text',
        })}
      />
      <p className="create-target-form__text">
        {intl.formatMessage({
          id: 'createtarget.select.topic.text',
        })}
      </p>
      <FormSelect
        customStyle={topicSelectStyle}
        customClassName="create-target-form__text create-target-form__select"
        optionsSet={topics}
        onChangeFunction={handleChangeTopic}
        placeHolder={intl.formatMessage({
          id: 'userform.select.gender.text',
        })}
        valueSelect={select_topic}
        placeHolder={intl.formatMessage({
          id: 'createtarget.topic.placeholder.text',
        })}
        components={{
          Option: CustomSelectOption,
          SingleValue: CustomSelectValue,
        }}
      />
      <button type="submit" className="create-target-form__btn-text">
        {intl.formatMessage({
          id: 'createtarget.save.btn.text',
        })}
      </button>
    </form>
  );
};

export default CreateTargetForm;
