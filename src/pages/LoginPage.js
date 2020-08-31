import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Redirect } from 'react-router-dom';

import '../style/App.scss';
import smilies from '../assets/smilies.png';
import LoginForm from '../components/users/LoginForm';
import AppStoreContainer from '../components/app-store-container/AppStoreContainer';
import menuIcon from '../assets/icons/menuIcon.png';
import { homePageLink } from '../constants/link.constants';
import SignUpOptions from '../components/users/SignUpOptions';
import ForgotPwd from '../components/users/ForgotPwd';

const LoginPage = () => {
  const intl = useIntl();

  const [forgotPwd, setForgotPwd] = useState(false);

  const handleForgotPwd = () => {
    setForgotPwd(true);
  };

  const user = localStorage.getItem('user');
  if (user) {
    return <Redirect to={homePageLink} />;
  }

  return (
    <div className="main-div">
      <div className="login-page-container">
        <div className="login-page-container__menu">
          <img src={menuIcon} alt="menu_button" />
        </div>
        <div className="login-page-container__smilies">
          <img src={smilies} alt="smilies" />
        </div>
        <p className="login-page-container__app-title">TARGET MVD</p>
        <p className="login-page-container__app-subtitle">
          {intl.formatMessage({
            id: 'loginpage.subtitle.text',
          })}
        </p>
        {!forgotPwd ? (
          <div align="center">
            <p className="login-page-container__description-text">
              {intl.formatMessage({
                id: 'loginpage.description.text',
              })}
            </p>
            <LoginForm intl={intl} />
            <div className="user-form__forgot-pwd">
              <button
                type="button"
                className="forgot_pwd__btn-text"
                onClick={handleForgotPwd}
              >
                {intl.formatMessage({
                  id: 'userform.forgotpwd.text',
                })}
              </button>
            </div>
            <SignUpOptions intl={intl} />
          </div>
        ) : (
          <ForgotPwd intl={intl} setForgotPwd={setForgotPwd} />
        )}
      </div>
      <AppStoreContainer />
    </div>
  );
};

export default LoginPage;
