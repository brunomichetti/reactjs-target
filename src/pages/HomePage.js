import React from "react";
import "../style/App.scss";
import TargetsMap from "../components/targets-map/TargetsMap";
import UserProfile from "../components/users/UserProfile";

const HomePage = () => {
    return (
        <div className="main-div">
            <UserProfile />      
            <TargetsMap />
        </div>
    )
}

export default HomePage;
