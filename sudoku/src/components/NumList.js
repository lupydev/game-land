import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";


function NumList(props){

    const {resaltar} = useContext(SudokuContext)

    return(        
        <div className="numList" onClick={() => resaltar(props.id)}>
            <p className="posibleNum">{props.num}</p>           
        </div>
    )
}

export default NumList;