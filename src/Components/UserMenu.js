import React from 'react';
import { NavLink} from "react-router-dom";
import {useState,useEffect} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import '../Styles/UserMenu.css';

const UserMenu = () => {


    const links =[
        {to:"/home",text:"Home"},
        {to:"/CookiesIngredients",text:"Recipes By Ingredients"},
        {to:"/recipes",text:"My FavRecipes"},
        {to:"/",text:"Log out"}

    ]
    const handleLogOUt=()=>{
        Cookies.remove('token');
        Cookies.remove('username');
    }



    return (
        <div>
            <table id={"nav-bar"} border={1}>
                <tr >
                    {
                        links.map((link) => {
                            return (
                                <th>
                                    <NavLink id={"font-nav"} to={link.to} onClick={link.text === "Log out" ? handleLogOUt : () => {}}> {link.text}  </NavLink>
                                </th>
                            )
                        })
                    }

                </tr>
            </table>
        </div>
    );
};
export default UserMenu;
