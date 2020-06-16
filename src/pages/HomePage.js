import React from "react";
import { useSelector } from "react-redux";
import "../style/App.scss";
import "../style/HomePage.scss";
import ExampleComponent from "react-rounded-image";
import defaultProfileImg from "../assets/profilePicture.png";
import { FormattedMessage } from "react-intl"

function HomePage() {
    //const { user: { email }} = JSON.parse(localStorage.getItem("user"));
    //const { message } = useSelector(state => state.alert);
    const user = { username: "usuario_prueba", email: "usuarioprueba.com" }
    return (
        <div className="main-div">
  
            <div className="left-menu">

            <p className="left-menu__app-title">TARGET</p>

            <div className="left-menu__profile-picture">
                <ExampleComponent
                    image={defaultProfileImg}
                    roundedSize="0"
                    imageWidth="150"
                    imageHeight="150"
                />
            </div>

            <p className="left-menu__username">{ user.username }</p>

            <div className="left-menu__edit-logout">
                <a href="/"><FormattedMessage id="homepage.edit.text"/></a> &nbsp; / &nbsp;
                <a href="/"><FormattedMessage id="homepage.logout.text"/></a>
            </div>

            <hr className="left-menu__hr"></hr>

            <p className="left-menu__matches"><FormattedMessage id="homepage.nomatches.text"/></p>
            
     
          </div>
  
          <div className="targets-map" align="center">
  
          </div>
  
      </div>
    )
}

export default HomePage;
