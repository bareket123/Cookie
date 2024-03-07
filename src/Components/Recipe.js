import React from 'react';
import '../Styles/Recipe.css'; // Import the CSS file for styling

const Recipe = (props) => {
    return (
        <div className="recipe-container">
            <label>{props.title}</label>
            <a href={props.url}>
                <img src={props.image} alt={props.title} />
            </a>
            <button> Add to my favorites ⭐</button>
        </div>
    );
};

export default Recipe;
