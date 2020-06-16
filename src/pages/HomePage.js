import React from "react";
import "../style/App.scss";
import "../style/HomePage.scss";
import ExampleComponent from "react-rounded-image";
import defaultProfileImg from "../assets/profilePicture.png";
import { FormattedMessage } from "react-intl";
import { Map, TileLayer } from "react-leaflet";
import { mapConstants } from "../constants/map.constants";
import menuIcon from "../assets/icons/menu_icon.png";
import smilies from "../assets/smilies.png";

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
                    <a href="/"><FormattedMessage id="homepage.edit.text"/></a> &nbsp; / &nbsp;
                    <a href="/"><FormattedMessage id="homepage.logout.text"/></a>
                </div>

                <hr className="left-menu__hr"></hr>

                <p className="left-menu__matches"><FormattedMessage id="homepage.nomatches.text"/></p>

                <div className="left-menu__smilies">
                    <img src={smilies} alt="smilies" className="smilies-img"></img>
                </div>
     
        </div>
  
        <Map
            center={{lat: mapConstants.INTIAL_LAT, lng: mapConstants.INITIAL_LONG}}
            zoom={mapConstants.INITIAL_ZOOM}
            style={{ width: "70vw", height: "100vh"}}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </Map>

      </div>
    )
}

export default HomePage;
