import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { string } from 'prop-types';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import 'components/users/user-form.scss';
import { userActions } from 'actions/user.actions';
import FormInput from 'components/common/FormInput';
import { userRequest } from 'actions/user.actions';
import CustomLoader from 'components/common/CustomLoader';
import { userConstants } from 'constants/user.constants';
import {
  validate,
  passwordConstraints,
  passwordConfirmConstraints,
  equalPasswordsConstraints,
  changePasswordConstraints,
} from 'helpers/constraints';

const ResetPasswordForm = ({ urlUid, urlToken }) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    password: '',
    passwordConfirm: '',
  });
  const { password, passwordConfirm } = inputs;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { loading, requestError, errorMsg, updated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (updated) {
      setIsSubmitted(false);
      alert(
        intl.formatMessage({
          id: 'reset.password.completed.text',
        })
      );
    }
  }, [updated, intl, setIsSubmitted]);

  const handleChange = ({ target: { name, value } }) => {
    if (requestError) {
      dispatch({ type: userConstants.USER_CLEAN_ALERT });
    }
    setIsSubmitted(false);
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    var errors = validate(inputs, changePasswordConstraints);
    if (!errors) {
      dispatch(userRequest());
      dispatch(
        userActions.resetPasswordConfirm(
          password,
          passwordConfirm,
          urlUid,
          urlToken
        )
      );
    }
  };

  return (
    <form className="user-form reset-password-form" onSubmit={handleSubmit}>
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'new.password.label.text',
        })}
        inputType="password"
        inputName="password"
        inputValue={password}
        inputOnChange={handleChange}
        error={isSubmitted && validate(inputs, passwordConstraints)}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.pass.text',
        })}
      />
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'userform.confirmpass.label.text',
        })}
        inputType="password"
        inputName="passwordConfirm"
        inputValue={passwordConfirm}
        inputOnChange={handleChange}
        error={isSubmitted && validate(inputs, passwordConfirmConstraints)}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.pass2.text',
        })}
      />
      <div>
        {isSubmitted && validate(inputs, equalPasswordsConstraints) && (
          <div className="user-form__alert">
            {intl.formatMessage({
              id: 'userform.not.matching.passwords.text',
            })}
          </div>
        )}
      </div>
      {loading && <CustomLoader />}
      {isSubmitted && requestError && (
        <div className="user-form__alert"> {errorMsg} </div>
      )}
      <div>
        <button type="submit" className="user-form__btn-text">
          {intl.formatMessage({
            id: 'reset.password.btn.text',
          })}
        </button>
      </div>
    </form>
  );
};

ResetPasswordForm.propTypes = {
  urlUid: string,
  urlToken: string,
};

export default ResetPasswordForm;
