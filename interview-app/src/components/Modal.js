import React from "react";
import Button from "./Button";
import "../styles/modal.css"


function Modal({title, stateModal}){



    return(
        <div className="modal-back">
            <div className="modal-container">
                
                <div className="modal-title">
                    <h2>{title}</h2>
                    <button 
                        className="close-modal"
                        onClick={()=>stateModal(false)}
                        >X</button>
                </div>
                <div className="body">
                    <form className="form">
                        <div className="fiel input-user">
                            <label>UserID: </label>
                            <input
                                type="number"
                                name="itemNumber"
                                pattern="[0-9]+" 
                                size="1"
                                required
                                ></input>
                        </div>

                        <div className="fiel input-title">
                            <label>Title: </label>
                            <input 
                                type="text"
                                required
                                placeholder="Add a title here"></input>
                        </div>

                        <div className="fiel input-body">
                            <label>Body: </label>
                            <textarea
                                required
                                rows={6}
                                placeholder="Add text here"></textarea>
                        </div>
                    </form>
                </div>

                <div className="footer">
                    <Button 
                        size={"md"}
                        className={"cancel"}
                        onClick={()=>stateModal(false)}
                        >Cancel</Button>
                    <Button size={"md"}
                        className={"add"}>Add</Button>
                </div>
            </div>

        </div>
       
        
       
    );
}

export default Modal;