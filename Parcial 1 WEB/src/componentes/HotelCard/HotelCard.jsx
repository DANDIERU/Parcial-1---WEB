import React, { useState } from "react";
import "./HotelCard.css"

export function HotelCard(props) {

    return(
        <>
        <div className="hotel-container">

            <div className="img-container">
                <img src={props.image}  className="hotel-img" alt="" />
            </div>
            
            <h1 className="hotel-name">{props.name}</h1>
            <p className="hotel-price"><b>Precio</b>: {props.price}</p>
            <p className="hotel-stars"><b>Calificación</b>: {props.stars}</p>
            <p className="hotel-location"><b>Ubicación</b>: {props.location}</p>
            <p className="hotel-services"><b>Servicios</b>: {props.services}</p>
            
            
        </div>
        </>
    )
}