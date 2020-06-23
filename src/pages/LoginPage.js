import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import '../style/App.scss';
import smilies from '../assets/smilies.png';
import i6 from '../assets/i6.png';
import social from '../assets/social.png';
import play from '../assets/play.png';
import appStoreButton from '../assets/appstore_button.png';
import menuIcon from '../assets/icons/menu_icon.png';
import LoginForm from '../components/users/LoginForm';

const Login = () => {
  const loggedIn = useSelector((state) => state.authentication.loggedIn);

  if (loggedIn) {
    return <Redirect to="/home" />;
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
      <div className="right-container" align="center">
        <div className="right-container__i6-img">
          <img src={i6} alt="i6" />
        </div>
        <div className="right-container__app-store-button">
          <img src={appStoreButton} alt="app-store-button" />
        </div>
        <div className="right-container__social">
          <img src={social} alt="social" />
        </div>
        <div className="right-container__play">
          <img src={play} alt="play" />
        </div>
      </div>
    </div>
  );
};

export default Login;
