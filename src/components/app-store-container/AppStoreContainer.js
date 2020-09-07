import React from 'react';

import './app-store-container.scss';
import i6 from '../../assets/i6.png';
import social from '../../assets/social.png';
import play from '../../assets/play.png';
import appStoreButton from '../../assets/appstore_button.png';

const AppStoreContainer = () => (
  <div className="app-store-container">
    <div className="app-store-container__i6-img">
      <img src={i6} alt="i6" />
    </div>
    <div className="app-store-container__app-store-button">
      <img src={appStoreButton} alt="app-store-button" />
    </div>
    <div className="app-store-container__social">
      <img src={social} alt="social" />
    </div>
    <div className="app-store-container__play">
      <img src={play} alt="play" />
    </div>
  </div>
);

export default AppStoreContainer;
