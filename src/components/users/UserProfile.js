import React from "react";
import ExampleComponent from "react-rounded-image";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";

import menuIcon from "../../assets/icons/menu_icon.png";
import smilies from "../../assets/smilies.png";
import "../../style/App.scss";
import "./user-profile.scss";
import defaultProfileImg from "../../assets/profilePicture.png";
import { userActions } from "../../actions/user.actions";

const UserProfile = () => {
    const dispatch = useDispatch();
    const { user: { email }} = JSON.parse(localStorage.getItem("user"));
    const loggingOut = useSelector(state => state.authentication.loggingOut);
    function handleLogout() {
        dispatch(userActions.logout())
    }
    return (
        <div className="user-profile">
            <div className="user-profile__options">
                <img src={menuIcon} alt="menu_button"></img>
            </div>
            <p className="user-profile__app-title">TARGET</p>
            <div className="user-profile__profile-picture">
                <ExampleComponent
                    image={defaultProfileImg}
                    roundedSize="0"
                    imageWidth="150"
                    imageHeight="150"
                />
            </div>
            <p className="user-profile__username">{ email }</p>
            <div className="user-profile__edit-logout">
                <a href="/home"><FormattedMessage id="homepage.edit.text"/></a> &nbsp; / &nbsp;
                <button 
                    type="button" className="logout__btn-text" onClick={handleLogout}
                >
                    <FormattedMessage id="homepage.logout.text"/>
                </button>
                {loggingOut && <Loader type="ThreeDots" color="#2FBCF7" height={80} width={50}/>}
            </div>
            <hr className="user-profile__hr"></hr>
            <p className="user-profile__matches"><FormattedMessage id="homepage.nomatches.text"/></p>
            <div className="user-profile__smilies">
                <img src={smilies} alt="smilies" className="smilies-img"></img>
            </div>
        </div>
    )
}

export default UserProfile;