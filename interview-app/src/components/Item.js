import React from "react";
import Button from "./Button";


function Item({data}){

    const handleDelete =()=>{
        console.log("deleting")
    }


    return(
        <tr className="row">
            <td data-title="ItemID">{data.id}</td>
            <td data-title="UserID">{data.userId}</td>
            <td data-title="Title"> {data.title}</td>
            <td data-title="Body">{data.body}</td>
            <td data-title="Action">
                <Button 
                    size={"md"} 
                    className={"delete"}
                    onClick={()=>handleDelete()}>Delete</Button></td>
        </tr>
       
        
       
    );
}

export default Item;