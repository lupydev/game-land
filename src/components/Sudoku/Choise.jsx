import React, { useContext } from "react";
import { SudokuContext } from "../../Contexts/SudokuContext";

function Choise(props) {

    const {selectDif} = useContext(SudokuContext)

    return(
        <button className="choice" id={props.id} onClick={() => selectDif(props.id)}>{props.choise}</button>
    )    
}

export default Choise;