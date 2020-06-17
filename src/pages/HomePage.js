import React from "react";
import ExampleComponent from "react-rounded-image";
import { FormattedMessage } from "react-intl";

import menuIcon from "../assets/icons/menu_icon.png";
import smilies from "../assets/smilies.png";
import "../style/App.scss";
import "../style/HomePage.scss";
import defaultProfileImg from "../assets/profilePicture.png";
import TargetsMap from "../components/targets-map/TargetsMap";

function HomePage() {

    const { user: { email }} = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="main-div">
  
            <div className="left-menu">

                <div className="left-menu__options">
                    <img src={menuIcon} alt="menu_button"></img>
                </div>

                <p className="left-menu__app-title">TARGET</p>

                <div className="left-menu__profile-picture">
                    <ExampleComponent
                        image={defaultProfileImg}
                        roundedSize="0"
                        imageWidth="150"
                        imageHeight="150"
                    />
                </div>

                <p className="left-menu__username">{ email }</p>

                <div className="left-menu__edit-logout">
                    <a href="/home"><FormattedMessage id="homepage.edit.text"/></a> &nbsp; / &nbsp;
                    <a href="/home"><FormattedMessage id="homepage.logout.text"/></a>
                </div>

                <hr className="left-menu__hr"></hr>

                <p className="left-menu__matches"><FormattedMessage id="homepage.nomatches.text"/></p>

                <div className="left-menu__smilies">
                    <img src={smilies} alt="smilies" className="smilies-img"></img>
                </div>
     
            </div>
        
            <TargetsMap />

        </div>
    )
}

export default HomePage;
