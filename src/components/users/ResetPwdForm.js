import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { object, string } from 'prop-types';

import { userActions } from '../../actions/user.actions';
import '../../style/App.scss';
import './user-form.scss';
import FormInput from '../common/FormInput';
import { userRequest } from '../../actions/user.actions';

const ResetPwdForm = ({ intl, url_uid, url_token }) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    new_password1: '',
    new_password2: '',
  });
  const { new_password1, new_password2 } = inputs;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const equalPasswords = new_password1 === new_password2;

  const { loading, requestError, errorMsg, updated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (updated) {
      setIsSubmitted(false);
      alert(
        intl.formatMessage({
          id: 'reset.pwd.completed.text',
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
    if (new_password1 && new_password2 && equalPasswords) {
      dispatch(userRequest());
      dispatch(
        userActions.resetPwdConfirm(
          new_password1,
          new_password2,
          url_uid,
          url_token
        )
      );
    }
  };

  return (
    <form
      align="center"
      className="user-form reset-pwd-form"
      onSubmit={handleSubmit}
    >
      <FormInput
        labelClassName="user-form__text"
        inputClassName="user-form__input"
        inputLabel={intl.formatMessage({
          id: 'new.pwd.label.text',
        })}
        inputType="password"
        inputName="new_password1"
        inputValue={new_password1}
        inputOnChange={handleChange}
        error={isSubmitted && !new_password1}
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
        inputName="new_password2"
        inputValue={new_password2}
        inputOnChange={handleChange}
        error={isSubmitted && !new_password2}
        errorMsg={intl.formatMessage({
          id: 'userform.missing.pass2.text',
        })}
      />
      <div>
        {isSubmitted && new_password1 && new_password2 && !equalPasswords && (
          <div className="user-form__alert">
            {intl.formatMessage({
              id: 'userform.not.matching.passwords.text',
            })}
          </div>
        )}
      </div>
      {loading && (
        <Loader type="ThreeDots" color="#2FBCF7" height={80} width={50} />
      )}
      {isSubmitted && requestError && (
        <div className="user-form__alert"> {errorMsg} </div>
      )}
      <div>
        <button type="submit" className="user-form__btn-text">
          {intl.formatMessage({
            id: 'reset.pwd.btn.text',
          })}
        </button>
      </div>
    </form>
  );
};

ResetPwdForm.propTypes = {
  intl: object,
  url_uid: string,
  url_token: string,
};

export default ResetPwdForm;
