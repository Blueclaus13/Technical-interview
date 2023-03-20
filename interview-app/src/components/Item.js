import React, { useState } from "react";
import Button from "./Button";
import EditPost from "./EditPost";
import Modal from "./Modal";


function Item({data, handleDataChange}){
    const [isEditing, setEditing]= useState(false);
    const [isDeleting, setDeleting] = useState(false);

    const handleDelete =(data)=>{
        //console.log("deleting");
        handleDataChange('delete', data);
        setDeleting(false);
    }

    const handleEdit =(data)=>{
        //console.log(data);
        handleDataChange('edit', data);
        setEditing(false)
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
                    onClick={()=>setDeleting(true)}>Delete</Button>

                {isDeleting && 
                    <Modal
                        titleModal={'Are you sure you want "Delete Post"?'}
                        changeState={setDeleting}
                        
                        > <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Button className="yes" onClick={()=>handleDelete(data)}>Yes</Button>
                        <Button className="cancel" onClick={()=>setDeleting(false)}>No</Button></div>
                </Modal>}
                <Button 
                    size={"md"} 
                    className={"edit"}
                    onClick={()=>setEditing(true)}>Edit</Button>
            {isEditing && 
                   <EditPost
                        titleModal={"Edit Post"}
                        changeState={setEditing}
                        data={data}
                        changes={handleEdit}></EditPost>
                    }</td>
        </tr>
       
        
       
    );
}

export default Item;