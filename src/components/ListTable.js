import React from "react";
import "../styles/listTable.css";
import Item from "./Item";



function ListTable({data, handleDataChange}){


    return(
       
        <table className="table-container">
            <thead>
                <tr className="columns">
                    <th>ItemID</th>
                    <th>UserID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Action</th>
                </tr>
            </thead>
                
            <tbody className="table-body">
                {data.map((item)=>(
                        <Item 
                        key={item.id}
                        data={item}
                        handleDataChange={handleDataChange}></Item>
                    ))}
                
            </tbody>
            
            
        </table>
       
    );
}

export default ListTable;