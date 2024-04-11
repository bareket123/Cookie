import React from 'react';
import '../Styles/LoadingLogo.css'
const LoadingComponent = () => {
    return (
        <div style={{  flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <img className={"cookie-image"} src={"https://lh4.googleusercontent.com/proxy/Y7QxWRSVeSH4jPI0_ljtMu02_iQ06HMBJYg4_4zoA7G-Wpyg9UKipuf1MQvLNw"} alt={"Loading"} />
            <div className="loader"></div>
        </div>
    );
};

export default LoadingComponent;
