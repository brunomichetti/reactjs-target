import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import '../style/App.scss';
import smilies from '../assets/smilies.png';
import LoginForm from '../components/users/LoginForm';
import AppStoreContainer from '../components/app-store-container/AppStoreContainer';
import menuIcon from '../assets/icons/menu_icon.png';
import { homePageLink } from '../constants/link.constants';

const LoginPage = () => {
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  if (loggedIn) {
    return <Redirect to={homePageLink} />;
  }
  return (
    <div className="main-div">
      <div className="left-container">
        <div className="left-container__menu">
          <img src={menuIcon} alt="menu_button" />
        </div>
        <div className="left-container__smilies">
          <img src={smilies} alt="smilies" />
        </div>
        <p className="left-container__app-title">TARGET MVD</p>
        <p className="left-container__app-subtitle">
          <FormattedMessage id="loginpage.subtitle.text" />
        </p>
        <p className="left-container__description-text">
          <FormattedMessage id="loginpage.description.text" />
        </p>
        <LoginForm />
      </div>
      <AppStoreContainer />
    </div>
  );
};

export default LoginPage;
