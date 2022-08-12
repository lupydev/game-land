import React, { useContext } from "react";
import { SudokuContext } from "../Contexts/SudokuContext";

function BotonNum(props){

    const {modo, ponerNum, selected} = useContext(SudokuContext)
    
    const poner = (num) => {

        ponerNum(selected, num, false, modo)
    }

    return( 
        <button className="btnNum" onClick={() => poner(props.n)}>{props.n}</button>
    )
}

export default  BotonNum;