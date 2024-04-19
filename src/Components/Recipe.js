import React, {useEffect, useState} from 'react';
import '../Styles/Recipe.css';
import Cookies from "js-cookie";
import axios from "axios"; // Import the CSS file for styling
import { FcFullTrash } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";

const Recipe = (props) => {
    const [buttonsText,setButtonsText]=useState(props.isFav?"Delete Recipe 🗑️":"Add to my favorites 🌠")
    const [token,setToken]=useState("");
    useEffect(() => {
       setToken(Cookies.get("token")) ;
    }, []);

    function handleAddButton() {
        setButtonsText("Added 👍🤎")
        if (token!==""){
            axios.get("http://localhost:8989/add-recipe-to-favorites?token="+token+"&title="+props.title+"&imgLink="+props.image+"&link="+props.url)
                .then((res)=>{
                if (res.data.success){
                    setButtonsText("Added 👍🤎")
                }else{
                    setButtonsText("Failed ❗" + res.data.errorCode)
                }
            })
        }
    }
function deleteRecipe(){
    if (token!==""){
        axios.get("http://localhost:8989/delete-recipe?recipeId="+props.id)
            .then((res)=>{
                if (res.data.success) {
                    alert("delete successfully!")
                }
                else{
                    alert(res.data.errorCode)
                }


            })
    }

}
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px", textAlign: "center", fontSize: "10px",marginBottom:"10px"}}>
            <h1 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip",color:"white",margin:"5px",textDecoration:"underline"}}>
                {props.title}
            </h1>
            <a href={props.url}>
                <img style={{height: "200px", width: "250px",  border: "10px solid rgba(0, 0, 128, 0.1)", borderRadius: "5px"}} src={props.image} alt={props.title} />
            </a>
            {
                !props.isFav?
                <button disabled={buttonsText === "Added 👍🤎"} onClick={handleAddButton} className="button-64"
                        role="button"><span className="text">{buttonsText}</span></button>
               :
               <div>
                <AiFillDelete onClickCapture={deleteRecipe} id={"myButton"} className={"t"} style={{fontSize:"50px"}} />
                <div id="textContainer">Delete Recipe</div>
                </div>
            }
            {/*<FcFullTrash className={"t"} style={{fontSize:"50px"}} onClick={()=>{alert("jj")}} />*/}




        </div>


    );
};

export default Recipe;
