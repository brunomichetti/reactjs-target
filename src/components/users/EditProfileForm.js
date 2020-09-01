import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import { useIntl } from 'react-intl';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import { userShape } from '../../constants/shapes';
import FormInput from '../common/FormInput';
import { genders, getGenderByValue } from './gendersList';
import FormSelect from '../common/FormSelect';
import { genderSelectStyle } from './genderSelectStyle';
import './edit-profile.scss';
import { userActions } from '../../actions/user.actions';
import { userRequest } from '../../actions/user.actions';
import { userConstants } from '../../constants/user.constants';

const EditProfileForm = ({ user, setEditProfile, newImg }) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { loading, requestError, errorMsg, updated } = useSelector(
    (state) => state.user
  );

  const [inputs, setInputs] = useState({
    name: user.name,
    gender: user.gender,
    password: '',
    confirmNewPassword: '',
    selectGender: getGenderByValue(user.gender),
  });
  const { name, gender, password, confirmNewPassword, selectGender } = inputs;

  const equalPasswords = password === confirmNewPassword;

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
    setIsSubmitted(false);
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleChangeGender = (selectGender) => {
    setIsSubmitted(false);
    setInputs((inputs) => ({
      ...inputs,
      gender: selectGender['value'],
      selectGender: selectGender,
    }));
  };

  const changedNameOrGender =
    (name && name !== user.name) || gender !== user.gender;

  const changedPassword = password && equalPasswords;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (changedNameOrGender || changedPassword || newImg) {
      dispatch(userRequest());
      dispatch(
        userActions.update(
          name,
          gender,
          password,
          confirmNewPassword,
          newImg,
          changedNameOrGender
        )
      );
    }
  };

  return (
    <form align="center" className="edit-profile-form" onSubmit={handleSubmit}>
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
        error={isSubmitted && !name}
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
        inputName="confirmNewPassword"
        inputValue={confirmNewPassword}
        inputOnChange={handleChange}
        error={!!(isSubmitted && password && !equalPasswords)}
        errorMsg={intl.formatMessage({
          id: 'userform.not.matching.passwords.text',
        })}
      />
      {loading && (
        <Loader type="ThreeDots" color="#2FBCF7" height={80} width={50} />
      )}
      {password && equalPasswords && requestError && isSubmitted && (
        <div className="user-form__alert"> {errorMsg} </div>
      )}
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
  intl: func,
  user: userShape,
  setEditProfile: func,
};

export default EditProfileForm;
