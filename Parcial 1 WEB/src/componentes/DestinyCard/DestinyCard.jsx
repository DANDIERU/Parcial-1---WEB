import React, { useState } from "react";
import "./DestinyCard.css"

export function DestinyCard(props) {

    return(
        <>
        <div className="destiny-container">

            <div className="">
                <img src={props.image} className="destiny-img" alt="" />

            </div>
            
            <h1 className="destiny-name">{props.name}</h1>
            <p className="destiny-price">{props.price}</p>

        </div>
        </>
    )
}
