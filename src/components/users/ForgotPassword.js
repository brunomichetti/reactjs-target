import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import 'components/users/user-form.scss';
import FormInput from 'components/common/FormInput';
import { userRequest, userActions } from 'actions/user.actions';
import { userConstants } from 'constants/user.constants';
import CustomLoader from 'components/common/CustomLoader';
import { validate, emailConstraints } from 'helpers/constraints';

const ForgotPassword = ({ setForgotPassword }) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ email: '' });
  const { email } = inputs;

  const [success, setSuccess] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { loading, emailSent, errorMsg, requestError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (emailSent) {
      setSuccess(true);
      setIsSubmitted(false);
    }
  }, [emailSent, setSuccess, setIsSubmitted]);

  const handleChange = ({ target: { name, value } }) => {
    if (requestError) {
      dispatch({ type: userConstants.USER_CLEAN_ALERT });
    }
    setIsSubmitted(false);
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleGoBack = () => {
    setForgotPassword(false);
    setSuccess(false);
    setInputs((inputs) => ({ ...inputs, email: '' }));
    setIsSubmitted(false);
    dispatch({ type: userConstants.USER_CLEAN_ALERT });
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
              error={isSubmitted && validate(inputs, emailConstraints)}
              errorMsg={intl.formatMessage({
                id: 'userform.missing.email.text',
              })}
            />
            {loading && <CustomLoader />}
            {isSubmitted && requestError && (
              <div className="user-form__alert"> {errorMsg} </div>
            )}
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
  setForgotPassword: func,
};

export default ForgotPassword;
