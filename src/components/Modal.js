import React from "react";
import "../styles/modal.css"


function Modal({titleModal, changeState, children}){


    return(
        <div className="modal-back">
            <div className="modal-container">
                
                <div className="modal-title">
                <button 
                        className="close-modal"
                        onClick={()=>changeState(false)}
                        >X</button>
                    <h2>{titleModal}</h2>
                    
                </div>
                <div >
                    {children}
                </div>
                    
            </div>
        </div> 
       
    );
}

export default Modal;