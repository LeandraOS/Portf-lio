
import React from "react";


export const Dots = ({primary, secondary, terciary}) => {
    return(
        <svg width="100" height="35" viewBox="0 0 141 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="17.5" r="17.5" fill={primary}/>
        <circle cx="123.5" cy="17.5" r="17.5" fill={secondary}/>
        <circle cx="70.5" cy="17.5" r="17.5" fill={terciary} fillOpacity="0.7"/>
        </svg>
    )
}

