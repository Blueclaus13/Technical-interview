import React from "react";
import Button from "./Button";


function Item({data}){

    const handleDelete =()=>{
        console.log("deleting")
    }

    const handleEdit =()=>{
        console.log("Editing")
    }


    return(
        <tr className="row">
            <td data-title="ItemID">{data.id}</td>
            <td data-title="UserID">{data.userId}</td>
            <td data-title="Title"> {data.title}</td>
            <td data-title="Body">{data.body}</td>
            <td data-title="Action" className="actions">
                <Button 
                    size={"md"} 
                    className={"delete"}
                    onClick={()=>handleDelete()}>Delete</Button>
                <Button 
                    size={"md"} 
                    className={"edit"}
                    onClick={()=>handleEdit()}>Edit</Button></td>
        </tr>
       
        
       
    );
}

export default Item;