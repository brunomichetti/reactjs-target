import React, { useState, useEffect } from 'react';
import { func, object } from 'prop-types';
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import '../../style/App.scss';
import './user-form.scss';
import FormInput from '../common/FormInput';
import { userRequest, userActions } from '../../actions/user.actions';
import { userConstants } from '../../constants/user.constants';

const ForgotPwd = ({ intl, setForgotPwd }) => {
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
    setForgotPwd(false);
    setSuccess(false);
    setInputs((inputs) => ({ ...inputs, email: '' }));
    dispatch({ type: userConstants.USER_REQUEST_SUCCESS });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (email) {
      dispatch(userRequest());
      dispatch(userActions.resetPwd(email));
    }
  };

  return (
    <div align="center" className="login-page-container__forgot_pwd">
      <p className="login-page-container__app-subtitle">
        {intl.formatMessage({ id: 'userform.forgotpwd.text' })}
      </p>
      {!success && (
        <div>
          <p className="login-page-container__description-text">
            {intl.formatMessage({ id: 'forgot.pwd.text' })}
          </p>
          <form
            align="center"
            className="login-page-container__forgot_pwd__form"
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
            {loading && (
              <Loader type="ThreeDots" color="#2FBCF7" height={80} width={50} />
            )}
            {showError && <div className="user-form__alert"> {errorMsg} </div>}
            <div>
              <button type="submit" className="reset_pwd__btn-text">
                {intl.formatMessage({
                  id: 'reset.pwd.btn.text',
                })}
              </button>
            </div>
          </form>
        </div>
      )}
      {success && (
        <div>
          <p className="login-page-container__description-text">
            {intl.formatMessage({ id: 'forgot.pwd.email.sent.text' })}
          </p>
        </div>
      )}
      <hr className="user-profile__hr" />
      <div>
        <button
          type="button"
          className="forgot_pwd__btn-text"
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

ForgotPwd.propTypes = {
  intl: object,
  setForgotPwd: func,
};

export default ForgotPwd;
