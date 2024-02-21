import React from 'react';
import { NavLink} from "react-router-dom";
import {useState,useEffect} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import '../Styles/UserMenu.css';

const UserMenu = () => {

    const navigate = useNavigate();
    const token=Cookies.get("token");

    const links =[
        {to:"/home",text:"Home"},
        {to:"/CookiesIngredients",text:"Cookies Ingredients"},
        {to:"/recipes",text:"Recipes"},
        {to:"/",text:"Log out"},

    ]




    return (
        <div>
            <table id={"nav-bar"} border={1}>
                <tr >
                    {
                        links.map((link) => {
                            return (
                                <th>
                                    <NavLink id={"font-nav"} to={link.to}> {link.text} </NavLink>
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
