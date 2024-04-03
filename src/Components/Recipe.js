import React, {useEffect, useState} from 'react';
import '../Styles/Recipe.css';
import Cookies from "js-cookie";
import axios from "axios"; // Import the CSS file for styling

const Recipe = (props) => {
    const [addButtonText,setAddButtonText]=useState("Add to my favorites 🌠")
    const [token,setToken]=useState("");
    useEffect(() => {
       setToken(Cookies.get("token")) ;
    }, []);
    function handleAddButton() {
        setAddButtonText("Added 👍🤎")
        if (token!==""){
            axios.get("http://localhost:8989/add-recipe-to-favorites?token="+token+"&title="+props.title+"&imgLink="+props.image+"&link="+props.url)
                .then((res)=>{
                if (res.data.success){
                    setAddButtonText("Added 👍🤎")
                }else{
                    setAddButtonText("Failed ❗" + res.data.errorCode)
                }
            })
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px", textAlign: "center", fontSize: "10px",marginBottom:"10px"}}>
            <h1 style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "clip",color:"white"}}>
                {props.title}
            </h1>
            <a href={props.url}>
                <img style={{height: "200px", width: "250px",  border: "10px solid rgba(0, 0, 128, 0.1)", borderRadius: "5px"}} src={props.image} alt={props.title} />
            </a>
            <button disabled={addButtonText==="Added 👍🤎"} onClick={handleAddButton} className="button-64" role="button"><span className="text">{addButtonText}</span></button>
        </div>



    );
};

export default Recipe;
