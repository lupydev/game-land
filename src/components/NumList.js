import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";


function NumList(props){

    return(        
        <div className="numList" >
            <p className="posibleNum">{props.num}</p>           
        </div>
    )
}

export default NumList;