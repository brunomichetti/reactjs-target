import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'prop-types';

import { userActions } from '../../actions/user.actions';
import '../../style/App.scss';
import './user-form.scss';
import FormInput from '../common/FormInput';
import { userRequest } from '../../actions/user.actions';
import CustomLoader from '../common/CustomLoader';

const ResetPasswordForm = ({ intl, urlUid, urlToken }) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    newPassword1: '',
    newPassword2: '',
  });
  const { newPassword1, newPassword2 } = inputs;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const equalPasswords = newPassword1 === newPassword2;

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
    setIsSubmitted(false);
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (newPassword1 && newPassword2 && equalPasswords) {
      dispatch(userRequest());
      dispatch(
        userActions.resetPasswordConfirm(
          newPassword1,
          newPassword2,
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
        inputName="newPassword1"
        inputValue={newPassword1}
        inputOnChange={handleChange}
        error={isSubmitted && !newPassword1}
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
        inputName="newPassword2"
        inputValue={newPassword2}
        inputOnChange={handleChange}
        error={isSubmitted && !newPassword2}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.pass2.text',
        })}
      />
      <div>
        {isSubmitted && newPassword1 && newPassword2 && !equalPasswords && (
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
  intl: object,
  urlUid: string,
  urlToken: string,
};

export default ResetPasswordForm;
