import React, { useCallback, useEffect } from "react";
import "../styles/toast.css"


function Toast({toastList, setList}){

    const deleteToast= useCallback(id=>{
        const toastListItem = toastList.filter(i=> i.id !== id);
        setList(toastListItem);
    }, [toastList, setList]);

    useEffect(()=>{
        const interval =setInterval(()=>{
            if(toastList.length){
                deleteToast(toastList[0].id);
            }
        }, 2500);
        return ()=>{
            clearInterval(interval);
        }
    },[toastList, deleteToast]);



    return(
        <div className= "container-toast">
            {
                toastList.map((toast, id)=>(
                    <div
                        key={id}
                        className="notification toast"
                        style={{backgroundColor: toast.backgroundColor}}>
                            <button className="close-toast"
                                onClick={()=>{deleteToast(toast.id)}}>x</button>
                            <div>
                                <p className="toast-title">{toast.title}</p>
                                <p className="toast-description">{toast.description}</p>
                            </div>
                        </div>
                ))
            }
        </div>
       
    );
}

export default Toast;