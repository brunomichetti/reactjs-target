import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import 'style/App.scss';
import smilies from 'assets/smilies.png';
import LoginForm from 'components/users/LoginForm';
import AppStoreContainer from 'components/app-store-container/AppStoreContainer';
import menuIcon from 'assets/icons/menuIcon.png';
import { homePageLink } from 'constants/link.constants';
import SignUpOptions from 'components/users/SignUpOptions';
import ForgotPassword from 'components/users/ForgotPassword';
import { userConstants } from 'constants/user.constants';

const LoginPage = () => {
  const intl = useIntl();

  const [forgotPassword, setForgotPassword] = useState(false);

  const dispatch = useDispatch();

  const handleForgotPassword = () => {
    dispatch({ type: userConstants.USER_CLEAN_ALERT });
    setForgotPassword(true);
  };

  const user = localStorage.getItem('user');
  if (user) {
    return <Redirect to={homePageLink} />;
  }

  return (
    <div className="main-div">
      <div className="initial-page-container">
        <div className="initial-page-container__menu">
          <img src={menuIcon} alt="menu_button" />
        </div>
        <div className="initial-page-container__smilies">
          <img src={smilies} alt="smilies" />
        </div>
        <p className="initial-page-container__app-title">TARGET MVD</p>
        <p className="initial-page-container__app-subtitle">
          {intl.formatMessage({
            id: 'loginpage.subtitle.text',
          })}
        </p>
        {forgotPassword ? (
          <ForgotPassword setForgotPassword={setForgotPassword} />
        ) : (
          <div className="initial-page-container__login">
            <p className="initial-page-container__description-text">
              {intl.formatMessage({
                id: 'loginpage.description.text',
              })}
            </p>
            <LoginForm />
            <div className="user-form__forgot-password">
              <button
                type="button"
                className="forgot_password__btn-text"
                onClick={handleForgotPassword}
              >
                {intl.formatMessage({
                  id: 'userform.forgotpassword.text',
                })}
              </button>
            </div>
            <SignUpOptions />
          </div>
        )}
      </div>
      <AppStoreContainer />
    </div>
  );
};

export default LoginPage;
