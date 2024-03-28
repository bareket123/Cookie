import React, {useState} from 'react';
import '../Styles/Recipe.css';

const Recipe = (props) => {
    const [addButtonText,setAddButtonText]=useState("Add to my favorites 🌠")

    function handleAddButton() {
        setAddButtonText("Added 👍🤎")

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
