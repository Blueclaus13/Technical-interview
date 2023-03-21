import React, { useState } from "react";
import Button from "./Button";
import "../styles/modal.css"


function ModalNew({titleModal, stateModal, handleChange}){

    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit (e){
        e.preventDefault();
        handleChange('new', {
            title: title, 
            body: body, 
            userId: userId,});
        setUserId('');
        setTitle('');
        setBody('');
    };



    return(
        <div className="modal-back">
            <div className="modal-container">
                
                <div className="modal-title">
                    <h2>{titleModal}</h2>
                    <button 
                        className="close-modal"
                        onClick={()=>stateModal(false)}
                        >X</button>
                </div>
                <div className="body">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="fiel input-user">
                            <label>UserID: </label>
                            <input
                                type="number"
                                name="itemNumber"
                                pattern="[0-9]+" 
                                size="1"
                                onChange={(e)=>setUserId(e.target.value)}
                                value={userId}
                                required
                                ></input>
                        </div>

                        <div className="fiel input-title">
                            <label>Title: </label>
                            <input 
                                type="text"
                                required
                                placeholder="Add a title here"
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}></input>
                        </div>

                        <div className="fiel input-body">
                            <label>Body: </label>
                            <textarea
                                required
                                rows={6}
                                placeholder="Add text here"
                                value={body}
                                onChange={(e)=>setBody(e.target.value)}></textarea>
                        </div>
                        <div className="footer">
                            <Button 
                                size={"md"}
                                className={"cancel"}
                                onClick={()=>stateModal(false)}
                                >Cancel</Button>
                            <Button 
                                size={"md"}
                                type={"submit"}
                                className={"add"}>Add</Button>
                        </div>
                    </form>
                </div>

                
            </div>

        </div>
       
        
       
    );
}

export default ModalNew;