import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
    let user = JSON.parse(localStorage.getItem("user"));
    const alert = useSelector(state => state.alert);
    return (
        <div>      
            {alert.message} : {user.user.email}
        </div>
    )
}

export default HomePage;
