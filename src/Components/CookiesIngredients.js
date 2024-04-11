import React, {useEffect, useState} from 'react';
import UserMenu from "./UserMenu";
import "../Styles/CookiesIngredientsStyle.css";
import '../Styles/LoginStyle.scss';
import axios from "axios";
import Recipe from "./Recipe";
const CookiesIngredients = () => {

    const ingredientsArray=[
        {name:"Flour 🌾🍚" ,id:"f-option"},
        {name:"Milk 🥛", id:"m-option"},
        {name: "Eggs🥚",id:"e-option"},
        {name: "Cocoa 🤎",id:"c-option"},
        {name:"Banana 🍌" ,id:"b-option"},
    ]
    const api_key = "e3c693562dee4f888713ca5113daf302";
    const [userIngredient,setUserIngredient]=useState("");
    const [foundRecipes,setFoundRecipes]=useState([]);
    const [allUrls,setAllUrls]=useState([]);
    const [allIngredients, setAllIngredients] = useState("");
    const [showRecipes,setShowRecipes]=useState(false);

    function addButton(){
        setAllIngredients(prevIngredients => prevIngredients + userIngredient + ",+");
        setUserIngredient("")
        alert("added successfully!")

    }
    async function setSearchButton  () {
        const jasonFormat=allIngredients.slice(0, -2).toLocaleLowerCase();
        if (jasonFormat){
            const url=`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api_key}&ingredients=${jasonFormat}&number=7`;
            try{
                const response = await axios.get(url);
                    console.log(response.data);
                    setFoundRecipes(response.data);
                    findIds(response.data);
                    setShowRecipes(true);

            }catch (error){
                console.error("Error fetching recipes:", error);
            }
        }

    }

    function findIds(founds){
        const idsArray=[]
        console.log("inside the find ids")
       founds.map((r=> {
           idsArray.push(r.id)

       }))

        console.log("all the ids are:" +idsArray)
        getUrl(idsArray);
    }
     function getUrl(ids) {
        console.log("inside the urls")
        let temp = [];
        let idsFormat = "";
        if (ids.length > 0) {
            ids.forEach((currentId, index) => {
                idsFormat += currentId;
                if (index !== ids.length - 1) {
                    idsFormat += ",";
                }
            });
            console.log(idsFormat)
            try {
               axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${api_key}&ids=${idsFormat}`).then((response)=>{
                   console.log(response.data);
                   if (response.data.length > 0) {
                       response.data.forEach((item) => {
                           temp.push(item.sourceUrl);
                           console.log(item.sourceUrl);
                       });
                   }
                   setAllUrls(temp);
               });

            } catch (error) {
                console.error("Error fetching recipe information:", error);
            }
        }
    }


    return (
        <div>
            <UserMenu/>
            {
                !showRecipes?
                    <div style={{marginTop:"100px"}}>
                        <h1 className={"header"}>Pick ingredients you got at home </h1>
                        <div>
                            <ul>
                                {
                                    ingredientsArray.map((ingredient)=>{
                                        return(
                                            <li>
                                                <div className="checkbox-wrapper-47">
                                                    <input type="checkbox" id={ingredient.id}  onChange={(e) => {
                                                        if (e.target.checked) {
                                                            setAllIngredients(prevIngredients => prevIngredients + ingredient.name + ",+");
                                                        } else {
                                                            // If unchecked, remove the ingredient from the list
                                                            setAllIngredients(prevIngredients => prevIngredients.replace(ingredient.name + ",+", ""));
                                                        }
                                                    }}   />

                                                    <label htmlFor={ingredient.id}>{ingredient.name}</label>
                                                </div>



                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div style={{flexDirection:"row"}}>
                                <h3 className={"free-text-label"}>Free Text:
                                    <input value={userIngredient} onChange={(e)=>{setUserIngredient(e.target.value)}} className={"free-text-input"} placeholder={"type in an ingredient"}/>
                                    <button disabled={userIngredient===""} onClick={addButton} className={"add-button"}
                                    >Add</button>
                                </h3>

                            </div>
                            <button disabled={allIngredients==="" && userIngredient===""} style={{position:"absolute",right:"50px"}} className={"modal-button"} onClick={setSearchButton}>search Recipes🔎</button>
                        </div>
                    </div>
                    :
                    <div>
                        <div className={"recipes-view"} style={{marginTop:"50px"}}>
                            <h1 className={"header"} style={{position:"fixed"}}>✨ Explore a collection of delicious recipes below! ✨</h1>
                            <div style={{ display: "flex", flexDirection: "row",marginTop:"150px" }} className={"scroll-container"}>

                                {
                                    foundRecipes.map((currentRecipe,index)=>{
                                        return(
                                            <Recipe isFav={false} key={index} title={currentRecipe.title} image={currentRecipe.image} url={allUrls[index]}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button className={"go-back"} onClick={()=>{setShowRecipes(false);setFoundRecipes([]);setAllIngredients("")}}>Go Back</button>
                    </div>

            }


        </div>
    );
};

export default CookiesIngredients;
