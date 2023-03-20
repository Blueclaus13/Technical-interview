import React, { useRef, useState } from "react";
import "../styles/searchControl.css"
import Button from "./Button";
import Axios  from 'axios';

function SearchControl ({setData, handleMessage}){

    const [value, setValue]= useState('');
    const ref= useRef(null);

    const handleSearch = ()=>{
        
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${value}`, {})
        .then((response)=>{ 
          console.log(response);
          console.log(response.data);
          if(response.status === 200){
            setData(response.data);
          }
          handleMessage('success', "The Post was successfully found.");

            
        })
        .catch(function (error){
            if(error.response){
                //out of 2XX
                handleMessage('fail', "Error, something went wrong");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }else if(error.request) {
                 // The request was made but no response was received
                 handleMessage('fail', "Something went wrong");
                 console.log(error.request);
            }else {
                // Something happened in setting up the request that triggered an Error
                handleMessage('fail', "Something went wrong");
                console.log('Error', error.message);
              }
              handleMessage('fail', "Error, something went wrong");
              console.log(error.config);
        });
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