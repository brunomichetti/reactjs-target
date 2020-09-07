import React, { useState, useEffect } from 'react';
import { func, object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import '../../style/App.scss';
import './user-form.scss';
import FormInput from '../common/FormInput';
import { userRequest, userActions } from '../../actions/user.actions';
import { userConstants } from '../../constants/user.constants';
import CustomLoader from '../../components/common/CustomLoader';

const ForgotPassword = ({ intl, setForgotPassword }) => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ email: '' });
  const { email } = inputs;

  const [success, setSuccess] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { loading, emailSent, errorMsg } = useSelector((state) => state.user);

  const showError = isSubmitted && errorMsg;

  useEffect(() => {
    if (emailSent) {
      setSuccess(true);
      setIsSubmitted(false);
    }
  }, [emailSent, setSuccess, setIsSubmitted]);

  const handleChange = ({ target: { name, value } }) => {
    setIsSubmitted(false);
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleGoBack = () => {
    setForgotPassword(false);
    setSuccess(false);
    setInputs((inputs) => ({ ...inputs, email: '' }));
    dispatch({ type: userConstants.USER_REQUEST_SUCCESS });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (email) {
      dispatch(userRequest());
      dispatch(userActions.resetPassword(email));
    }
  };

  return (
    <div className="initial-page-container__forgot_password">
      <p className="initial-page-container__app-subtitle">
        {intl.formatMessage({ id: 'userform.forgotpassword.text' })}
      </p>
      {!success ? (
        <div>
          <p className="initial-page-container__description-text">
            {intl.formatMessage({ id: 'forgot.password.text' })}
          </p>
          <form
            className="initial-page-container__forgot_password__form"
            onSubmit={handleSubmit}
          >
            <FormInput
              labelClassName="user-form__text"
              inputClassName="user-form__input"
              inputLabel={intl.formatMessage({
                id: 'userform.email.label.text',
              })}
              inputType="email"
              inputName="email"
              inputValue={email}
              inputOnChange={handleChange}
              error={isSubmitted && !email}
              errorMsg={intl.formatMessage({
                id: 'userform.missing.email.text',
              })}
            />
            {loading && <CustomLoader />}
            {showError && <div className="user-form__alert"> {errorMsg} </div>}
            <div>
              <button type="submit" className="reset_password__btn-text">
                {intl.formatMessage({
                  id: 'reset.password.btn.text',
                })}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <p className="initial-page-container__description-text">
            {intl.formatMessage({ id: 'forgot.password.email.sent.text' })}
          </p>
        </div>
      )}
      <hr className="user-profile__hr" />
      <div>
        <button
          type="button"
          className="forgot_password__btn-text"
          onClick={handleGoBack}
        >
          {intl.formatMessage({
            id: 'back.text',
          })}
        </button>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  intl: object,
  setForgotPassword: func,
};

export default ForgotPassword;
