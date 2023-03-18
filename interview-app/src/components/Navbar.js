import React from "react";
import "../styles/navbar.css";

function Navbar({title}){

    return(
        <div className="App-header" >
             <h1 className="title">{title}</h1>
        </div>

    );

}

export default Navbar;

