import React from 'react';
import '../Styles/LoadingLogo.css'
import logo from '../Images/logoCookies.gif';
const LoadingComponent = () => {
    return (
        <div style={{  flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <img className={"cookie-image"} src={logo} alt={"Loading"} />
            <div className="loader"></div>
        </div>
    );
};

export default LoadingComponent;
