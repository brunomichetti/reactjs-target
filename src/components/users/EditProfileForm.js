import React, { useState } from 'react';
import { func, object } from 'prop-types';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { omit, isEmpty } from 'lodash';
import { validate } from 'validate.js';

import 'components/users/edit-profile.scss';
import { userShape } from 'constants/shapes';
import FormInput from 'components/common/FormInput';
import { genders, getGenderByValue } from 'components/users/gendersList';
import FormSelect from 'components/common/FormSelect';
import { genderSelectStyle } from 'components/users/genderSelectStyle';
import { userActions } from 'actions/user.actions';
import { userRequest } from 'actions/user.actions';
import {
  userActionTypesConstants,
  userFormNames,
} from 'constants/user.constants';
import CustomLoader from 'components/common/CustomLoader';
import { editProfileConstraints } from 'helpers/users-constraints';
import useEditProfile from 'hooks/useEditProfile';

const EditProfileForm = ({ user, setEditProfile, newImg }) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const { loading, requestError, errorMsg } = useEditProfile(setEditProfile);

  const [inputs, setInputs] = useState({
    name: user.name,
    gender: user.gender,
    password: '',
    passwordConfirm: '',
    selectGender: getGenderByValue(user.gender),
  });
  const { name, gender, password, passwordConfirm, selectGender } = inputs;

  const { NAME, PASSWORD, PASSWORD_CONFIRM } = userFormNames;

  const { USER_CLEAN_ALERT } = userActionTypesConstants;

  const handleChange = ({ target: { name, value } }) => {
    if (requestError) {
      dispatch({ type: USER_CLEAN_ALERT });
    }
    setErrors(omit(errors, name));
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleChangeGender = (selectGender) => {
    if (requestError) {
      dispatch({ type: USER_CLEAN_ALERT });
    }
    setInputs((inputs) => ({
      ...inputs,
      gender: selectGender['value'],
      selectGender: selectGender,
    }));
  };

  const changedNameOrGender = name !== user.name || gender !== user.gender;

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentErrors = validate(inputs, editProfileConstraints) || {};
    if (isEmpty(currentErrors) && (password || changedNameOrGender || newImg)) {
      dispatch(userRequest());
      dispatch(
        userActions.update(
          name,
          gender,
          password,
          passwordConfirm,
          newImg,
          changedNameOrGender
        )
      );
    }
    setErrors(currentErrors);
  };

  return (
    <form className="edit-profile-form" onSubmit={handleSubmit}>
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'editprofile.update.name.text',
        })}
        inputType="text"
        inputName={NAME}
        inputValue={name}
        inputOnChange={handleChange}
        error={NAME in errors}
        errorMsg={intl.formatMessage({
          id: 'editprofile.empty.name.text',
        })}
      />
      <p className="user-form__text">
        {intl.formatMessage({
          id: 'editprofile.update.gender.text',
        })}
      </p>
      <div className="edit-profile-form__gender-select">
        <FormSelect
          customStyle={genderSelectStyle}
          customClassName="user-form__text user-form__select"
          optionsSet={genders}
          onChangeFunction={handleChangeGender}
          valueSelect={selectGender}
        />
      </div>
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'editprofile.update.password.text',
        })}
        inputType="password"
        inputName={PASSWORD}
        inputValue={password}
        inputOnChange={handleChange}
      />
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'editprofile.update.password.confirm.text',
        })}
        inputType="password"
        inputName={PASSWORD_CONFIRM}
        inputValue={passwordConfirm}
        inputOnChange={handleChange}
        error={PASSWORD_CONFIRM in errors}
        errorMsg={intl.formatMessage({
          id: 'userform.not.matching.passwords.text',
        })}
      />
      {loading && <CustomLoader />}
      {requestError && <div className="user-form__alert"> {errorMsg} </div>}
      <div>
        <button
          type="submit"
          className="user-form__btn-text edit-profile__button"
        >
          {intl.formatMessage({
            id: 'editprofile.save.changes.text',
          })}
        </button>
      </div>
    </form>
  );
};

EditProfileForm.propTypes = {
  user: userShape,
  setEditProfile: func,
  newImg: object,
};

export default EditProfileForm;
