import React, { useRef, useState } from "react";
import "../styles/searchControl.css"
import Button from "./Button";

function SearchControl (){

    const [value, setValue]= useState('');
    const ref= useRef(null);

    const handleSearch = ()=>{
        console.log(value)
        ref.current.value= '';
        setValue('');
    }

    return(
        <div className='searchControl'>

             <div className="search">
                <label>Find by Item id: </label>
                <input 
                    placeholder="Find..."
                    type="number"
                    name="itemNumber"
                    pattern="[0-9]+"
                    ref={ref}
                    onChange={event=>setValue(event.target.value)}
                    ></input>
                <Button size={"sm"} className={"find"}
                        onClick={()=>{handleSearch()}}>Search</Button>
             </div>
        </div>
    );
}

export default SearchControl;