import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { func, string } from 'prop-types';
import { useIntl } from 'react-intl';
import { validate } from 'validate.js';
import { isEmpty, omit } from 'lodash';

import 'components/targets/create-target-form.scss';
import FormInput from 'components/common/FormInput';
import FormSelect from 'components/common/FormSelect';
import { topicSelectStyle } from 'components/targets/topicSelectStyle';
import {
  CustomSelectOption,
  CustomSelectValue,
} from 'components/common/customIconOption';
import { topics } from 'components/targets/topicsList';
import { targetActions } from 'actions/target.actions';
import { targetFormNames } from 'constants/target.constants';
import { userRequest } from 'actions/user.actions';
import { latLngShape } from 'constants/shapes';
import CustomLoader from 'components/common/CustomLoader';
import { createTargetConstraints } from 'helpers/targets-constraints';
import useCreateTarget from 'hooks/useCreateTarget';

const CreateTargetForm = ({
  newTargetlatlng,
  setNewTargetlatlng,
  newTargetRadius,
  setNewTargetRadius,
}) => {
  const intl = useIntl();

  const { select_topic } = {};

  const { createTargetError, createTargetRequest } = useCreateTarget(
    setNewTargetlatlng,
    setNewTargetRadius
  );

  const [inputs, setInputs] = useState({
    radius: newTargetRadius,
    title: '',
    topic: '',
  });
  const { radius, title, topic } = inputs;

  const { RADIUS, TITLE, TOPIC } = targetFormNames;

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    setErrors(omit(errors, name));
  };

  const handleChangeTopic = (select_topic) => {
    setInputs((inputs) => ({ ...inputs, topic: select_topic['value'] }));
    setErrors(omit(errors, TOPIC));
  };

  const handleChangeRadius = (e) => {
    setInputs((inputs) => ({ ...inputs, radius: e.value }));
    setNewTargetRadius(e.value);
    setErrors(omit(errors, RADIUS));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentErrors = validate(inputs, createTargetConstraints) || {};
    if (isEmpty(currentErrors)) {
      dispatch(userRequest());
      dispatch(
        targetActions.create(
          radius,
          title,
          topic,
          newTargetlatlng.lat,
          newTargetlatlng.lng
        )
      );
    }
    setErrors(currentErrors);
  };

  return (
    <form className="create-target-form" onSubmit={handleSubmit}>
      <p className="create-target-form__text">
        {intl.formatMessage({
          id: 'createtarget.specify.area.text',
        })}
      </p>
      <NumberFormat
        thousandSeparator={true}
        suffix={' m'}
        className="create-target-form__input"
        inputMode="numeric"
        name={RADIUS}
        value={radius}
        onValueChange={handleChangeRadius}
      />
      {RADIUS in errors && errors.radius[0].includes('restricted') && (
        <div className="user-form__alert">
          {intl.formatMessage({
            id: 'createtarget.missing.radius.text',
          })}
        </div>
      )}
      {RADIUS in errors && errors.radius[0].includes('greater') && (
        <div className="user-form__alert">
          {intl.formatMessage({
            id: 'createtarget.radius.neg.error.text',
          })}
        </div>
      )}
      <FormInput
        labelClassName="create-target-form__text"
        inputClassName="create-target-form__input"
        inputLabel={intl.formatMessage({
          id: 'createtarget.target.title.text',
        })}
        inputType="text"
        inputName={TITLE}
        inputValue={title}
        inputOnChange={handleChange}
        inputPlaceHolder={intl.formatMessage({
          id: 'createtarget.title.placeholder.text',
        })}
        error={TITLE in errors}
        errorMsg={intl.formatMessage({
          id: 'createtarget.missing.title.text',
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
        valueSelect={select_topic}
        placeHolder={intl.formatMessage({
          id: 'createtarget.topic.placeholder.text',
        })}
        components={{
          Option: CustomSelectOption,
          SingleValue: CustomSelectValue,
        }}
        error={TOPIC in errors}
        errorMsg={intl.formatMessage({
          id: 'createtarget.missing.topic.text',
        })}
        alertClassName="create-target-form__alert-select"
      />
      <button type="submit" className="create-target-form__btn-text">
        {intl.formatMessage({
          id: 'createtarget.save.btn.text',
        })}
      </button>
      {createTargetRequest && <CustomLoader />}
      {createTargetError && (
        <div className="user-form__alert"> {createTargetError} </div>
      )}
    </form>
  );
};

CreateTargetForm.propTypes = {
  newTargetlatlng: latLngShape,
  setNewTargetlatlng: func,
  newTargetRadius: string,
  setNewTargetRadius: func,
};

export default CreateTargetForm;
