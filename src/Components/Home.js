import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import UserMenu from "./UserMenu";
import '../Styles/LoginStyle.scss';
import CookieDesign from "./CookieDesign";
import axios from "axios";


const Home = () => {


    const username= Cookies.get("username");
    const [isPressed,setIsPressed]=useState(false);

    useEffect(()=>{

    },[isPressed])

    return (
        <div>
         <UserMenu/>
        <h1 style={{color:"white"}}>Welcome {username}</h1>
            <div className={"button-container"}>
                <button onClick={()=>{setIsPressed(!isPressed)}}  style={ { visibility: isPressed ? 'hidden' : 'visible' } } className="modal-button">set your dream cookie</button>

            </div>
            {
            isPressed&&
                <div style={{position:"relative",bottom:"100px"}}>
                    <CookieDesign/>
                </div>


        }


        </div>
    );
};

export default Home;
