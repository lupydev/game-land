import React from "react";
import Celd from "./Celd";

function Row(props) {
    
    let cols = []

    for(let i = 0; i < props.mat[props.row].length; i ++){
        cols.push(i)
    }    

    return(
        <div className="rowBuscaminas">
            {cols.map((col) => {
                return(
                    <Celd 
                        celd = {props.mat[props.row][col]}
                        c = {col}
                        r = {props.row}
                    />
                )
            })}
        </div>
    )
}

export default Row;