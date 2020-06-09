import React from "react";
import "../style/App.scss";
import smilies from "../assets/smilies.png";
import i6 from "../assets/i6.png";
import social from "../assets/social.png";
import play from "../assets/play.png";
import appStoreButton from "../assets/appstore_button.png";
import menuIcon from "../assets/icons/menu_icon.png";
import LoginForm from "../components/users/LoginForm"

function Login() {
    return (
      <div class="main-div">
  
          <div class="left-container">
  
            <div class="left-container__menu">
              <img src={menuIcon} alt="menu_button"></img>
            </div>
  
            <div class="left-container__smilies">
              <img src={smilies} alt="smilies"></img>
            </div>
  
            <p class="left-container__app-title">TARGET MVD</p>
            <p class="left-container__app-subtitle">Find people near you & connect</p>
            <p class="left-container__description-text" >Create a  target wherever on the map, specify your interest: 
              Travel, Dating, Music, etc and start conecting with others who share your interest.</p>
            
            <LoginForm/>
  
          </div>
  
          <div class="right-container" align="center">
  
            <div class="right-container__i6-img">
              <img src={i6} alt="i6"></img>
            </div>
  
            <div class="right-container__app-store-button">
              <img src={appStoreButton} alt="app-store-button"></img>
            </div>
  
            <div class="right-container__social">
              <img src={social} alt="social"></img>
            </div>
  
            <div class="right-container__play">
              <img src={play} alt="play"></img>
            </div>
  
          </div>
  
      </div>
    );
  }
  
  export default Login;