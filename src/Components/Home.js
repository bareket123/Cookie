import React, {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import UserMenu from "./UserMenu";
import '../Styles/LoginStyle.scss';
import CookieDesign from "./CookieDesign";
import axios from "axios";


const Home = () => {


    const [username,setUsername]= useState("");
    const [isPressed,setIsPressed]=useState(false);
    useEffect(()=>{
        const token= Cookies.get("token");
        axios.get("http://localhost:8989/get-username-by-token?token="+token)
            .then((res)=>{
            if (res.data.success){
                Cookies.set("username",res.data.token)
                setUsername(Cookies.get("username"));
            }else {
                console.log("error in finding token: "+res.data.errorCode)
            }
        })
    },[])
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
