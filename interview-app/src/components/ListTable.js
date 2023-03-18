import React from "react";
import "../styles/listTable.css";
import Item from "./Item";



function ListTable(){


    return(
       
        <table className="table-container">
            <thead>
                <tr className="columns">
                    <th>UserID</th>
                    <th>ItemID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
                
            <tbody className="table-body">
                
                <Item></Item>
                
            </tbody>
            
            
        </table>
       
    );
}

export default ListTable;