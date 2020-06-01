import React from 'react';
import './App.css';
import smilies from './assets/smilies.png';
import i6 from './assets/i6.png';
import social from './assets/social.png';
import play from './assets/play.png';
import appstorebtn from './assets/appstore_button.png';
import menu_icon from './assets/icons/menu_icon.png';

function App() {
  return (
    <div class='main-div'>
        <div class='left-container'>
          <div class='menu'>
            <img src={menu_icon} alt='menu'></img>
          </div>
          <div class='smilies' align='center'>
            <img src={smilies} alt='smilies'></img>
          </div>
          <p class='app-title' align='center'>TARGET MVD</p>
          <p class='app-subtitle' align='center'>Find people near you & connect</p>
          <p class='description-text' align='center'>Create a  target wherever on the map, specify your interest: 
            Travel, Dating, Music, etc and start conecting with others who share your interest.</p>
        </div>
        <div class='right-container' align='center'>
          <div class='i6-img'>
            <img src={i6} alt='i6'></img>
          </div>
          <div class='app-store-button'>
            <img src={appstorebtn} alt='app-store-button'></img>
          </div>
          <div class='social'>
            <img src={social} alt='social'></img>
          </div>
          <div class='play'>
            <img src={play} alt='play'></img>
          </div>
        </div>
    </div>
  );
}

export default App;
