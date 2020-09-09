import React, { useState, useEffect } from 'react';
import { func, object } from 'prop-types';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { omit } from 'lodash';

import 'components/users/edit-profile.scss';
import { userShape } from 'constants/shapes';
import FormInput from 'components/common/FormInput';
import { genders, getGenderByValue } from 'components/users/gendersList';
import FormSelect from 'components/common/FormSelect';
import { genderSelectStyle } from 'components/users/genderSelectStyle';
import { userActions } from 'actions/user.actions';
import { userRequest } from 'actions/user.actions';
import { userConstants } from 'constants/user.constants';
import CustomLoader from 'components/common/CustomLoader';
import { validate, editProfileConstraints } from 'helpers/constraints';

const EditProfileForm = ({ user, setEditProfile, newImg }) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const { loading, requestError, errorMsg, updated } = useSelector(
    (state) => state.user
  );

  const [inputs, setInputs] = useState({
    name: user.name,
    gender: user.gender,
    password: '',
    passwordConfirm: '',
    selectGender: getGenderByValue(user.gender),
  });
  const { name, gender, password, passwordConfirm, selectGender } = inputs;

  useEffect(() => {
    if (updated) {
      alert(
        intl.formatMessage({
          id: 'editprofile.success.text',
        })
      );
      setEditProfile(null);
      dispatch({ type: userConstants.USER_UPDATE_SUCCESS_FINISHED });
    }
  }, [updated, setEditProfile, intl, dispatch]);

  const handleChange = ({ target: { name, value } }) => {
    if (requestError) {
      dispatch({ type: userConstants.USER_CLEAN_ALERT });
    }
    setErrors(omit(errors, name));
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleChangeGender = (selectGender) => {
    if (requestError) {
      dispatch({ type: userConstants.USER_CLEAN_ALERT });
    }
    setInputs((inputs) => ({
      ...inputs,
      gender: selectGender['value'],
      selectGender: selectGender,
    }));
  };

  const changedNameOrGender =
    (name && name !== user.name) || gender !== user.gender;

  const changedPassword = password && password === passwordConfirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    var currentErrors = validate(inputs, editProfileConstraints) || {};
    if (changedNameOrGender || changedPassword || newImg) {
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
        inputName="name"
        inputValue={name}
        inputOnChange={handleChange}
        error={'name' in errors}
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
        inputName="password"
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
        inputName="passwordConfirm"
        inputValue={passwordConfirm}
        inputOnChange={handleChange}
        error={
          password &&
          'passwordConfirm' in errors &&
          errors.passwordConfirm[0].includes('restricted')
        }
        errorMsg={intl.formatMessage({
          id: 'userform.missing.pass2.text',
        })}
      />
      <div>
        {password &&
          'passwordConfirm' in errors &&
          errors.passwordConfirm[0].includes('not equal') && (
            <div className="user-form__alert">
              {intl.formatMessage({
                id: 'userform.not.matching.passwords.text',
              })}
            </div>
          )}
      </div>
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
