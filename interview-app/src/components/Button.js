import React from "react";
import "../styles/button.css"


function Button ({type,className, id, onClick, children, size}){

    return(
        <button
        type={ type ? type : "button"}
        className={className ? `btn-component ${className}` : "btn-component"}
        id={id}
        onClick={onClick}
        style={{padding: size === "sm" ? "5px" : size === "md" ? "0.5rem" : size === "lg" ? "1rem" : "1px"}}
            >{children}</button>
    );
}

export default Button;