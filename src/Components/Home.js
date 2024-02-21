import React, {useState} from 'react';
import Cookies from 'js-cookie';
import UserMenu from "./UserMenu";
import '../Styles/LoginStyle.scss';
import CookieDesign from "./CookieDesign";


const Home = () => {
    const username =Cookies.get("username");
const [isPressed,setIsPressed]=useState(false);
    return (
        <div>
         <UserMenu/>
        <h1>Welcome {username}</h1>
            <div className={"button-container"}>
                <button onClick={()=>{setIsPressed(true)}} className="modal-button">set your dream cookie</button>
                {/*{*/}
                {/*    isPressed&&*/}
                {/*    <CookieDesign/>*/}
                {/*}*/}

            </div>

        </div>
    );
};

export default Home;
