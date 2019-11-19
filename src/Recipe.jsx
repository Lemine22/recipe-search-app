import React, { Component } from 'react';
import style from './recipe.module.css';

const Recipe  = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
            {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image}/>
            
        </div>

    );
}

export default Recipe;