import React, {useEffect, useState} from 'react';
import UserMenu from "./UserMenu";
import Cookies from "js-cookie";
import axios from "axios";
import Recipe from "./Recipe";

const FavRecipes = () => {

    const token = Cookies.get("token");
    const [favRecipes,setFavRecipes]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:8989/get-all-favorites-recipes?token="+token)
            .then((res)=>{
            if (res.data.success){
                setFavRecipes(res.data.recipeList)
            }else {

            }
        })



    }, [favRecipes]);


    return (
        <div>
            <UserMenu/>
            <div style={{marginTop:"100px"}}>
                <div style={{display: "table", backgroundColor: "rgba(0, 0, 0, 0.7)", margin: "0 auto"  , borderWidth: 10, borderStyle: "inset" ,borderColor:"rgb(212,175,55)",borderRadius: 10 }}>
                    {
                        // Grouping recipes in pairs
                        Array.from({ length: Math.ceil(favRecipes.length / 3) }).map((_, rowIndex) => (
                            <div key={rowIndex} style={{ display: "table-row" ,width:"50%"}}>
                                {
                                    // Rendering three recipes per row
                                    favRecipes.slice(rowIndex * 3, rowIndex * 3 + 3).map((currentRecipe, cellIndex) => (
                                        <div key={cellIndex} style={{ display: "table-cell", borderStyle: "solid", borderColor:"rgb(212,175,55)", borderWidth: 2, textAlign: "center" }}>
                                            <Recipe isFav={true} id={currentRecipe.id} title={currentRecipe.title} image={currentRecipe.imgLink} url={currentRecipe.link} />
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>



        </div>
    );
};

export default FavRecipes;
