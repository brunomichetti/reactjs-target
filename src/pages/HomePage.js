import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
    const { user: { email }} = JSON.parse(localStorage.getItem("user"));
    const { message } = useSelector(state => state.alert);
    return (
        <div>      
            { message } : { email }
        </div>
    )
}

export default HomePage;
