import React, { useState } from 'react';

import FormInput from '../common/FormInput';
import { genderSelectStyle } from '../users/genderSelectStyle';
import FormSelect from '../common/FormSelect';

const CreateTargetForm = ({ intl }) => {
  const handleSubmit = () => {};

  const { select_topic } = {};

  const topics = [
    { value: 'football', label: 'Football' },
    { value: 'travel', label: 'Travel' },
    { value: 'politics', label: 'Politics' },
    { value: 'art', label: 'Art' },
    { value: 'dating', label: 'Dating' },
    { value: 'music', label: 'Music' },
    { value: 'movies', label: 'Movies' },
    { value: 'series', label: 'Series' },
    { value: 'food', label: 'Food' },
  ];

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
    <form align="center" className="create-target-form" onSubmit={handleSubmit}>
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'createtarget.specify.area.text',
        })}
        inputType="number"
        inputName="radius"
        inputValue={radius}
        inputOnChange={handleChange}
      />
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
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
      <p className="user-form__text">
        {intl.formatMessage({
          id: 'createtarget.select.topic.text',
        })}
      </p>
      <FormSelect
        customStyle={genderSelectStyle}
        customClassName="user-form__text user-form__select"
        optionsSet={topics}
        onChangeFunction={handleChangeTopic}
        placeHolder={intl.formatMessage({
          id: 'userform.select.gender.text',
        })}
        valueSelect={select_topic}
        placeHolder={intl.formatMessage({
          id: 'createtarget.topic.placeholder.text',
        })}
      />
      <button type="submit" className="user-form__btn-text">
        {intl.formatMessage({
          id: 'createtarget.save.btn.text',
        })}
      </button>
    </form>
  );
};

export default CreateTargetForm;
