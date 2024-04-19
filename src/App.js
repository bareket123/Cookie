import React from 'react'; // Add this line to import React
import './App.scss';
import Login from "./Components/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import CookiesIngredients from "./Components/CookiesIngredients";
import FavRecipes from "./Components/FavRecipes";
import CookieDesign from "./Components/CookieDesign";
import ForgetPassword from "./Components/ForgetPassword";

function App() {
  return (

          <BrowserRouter>
              <Routes>
                  <Route path={"/home"} element={<Home/>}></Route>
                  <Route path={"/"} element={<Login/>}></Route>
                  <Route path={"/CookiesIngredients"} element={<CookiesIngredients/>}></Route>
                  <Route path={"/recipes"} element={<FavRecipes/>}></Route>
                  <Route path={"/cookieDesign"} element={<CookieDesign/>}></Route>
                  <Route path={"/forgetPassword"} element={<ForgetPassword/>}></Route>

              </Routes>
          </BrowserRouter>


  );
}

export default App;
