import React, { useState } from "react";
import "./FoodCard.css"

export function FoodCard(props) {

    return(
        <>
        <div className="food-container">

            <div className="img-container">
            <img src={props.image}  className="food-img" alt="" />
            </div>
            
            <h1 className="food-name">{props.name}</h1>
            <p className="food-price"><b>Precio</b>: {props.price}</p>
            
        </div>
        </>
    )
}