
import React from "react";


export const Dots = ({primary, secundary, terciary}) => {
    return(
        <a href="#">
        <svg width="100" height="35" viewBox="0 0 141 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15.5" cy="15.5" r="15.5" fill={primary}/>
        <circle cx="123.5" cy="15.5" r="15.5" fill={secundary}/>
        <circle cx="70.5" cy="15.5" r="15.5" fill={terciary} fillOpacity="0.7"/>
        </svg>
        </a>
    )
}

