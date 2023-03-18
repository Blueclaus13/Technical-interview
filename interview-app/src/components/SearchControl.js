import React from "react";
import "../styles/searchControl.css"
import Button from "./Button";

function SearchControl (){

    return(
        <div className='searchControl'>

             <div className="search">
                <label>Find by id: </label>
                <input></input>
                <Button size={"sm"} className={"find"}
                        onClick={()=>{console.log("Searching")}}>Search</Button>
             </div>
        </div>
    );
}

export default SearchControl;