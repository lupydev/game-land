import React, { useContext } from "react";
import { SudokuContext } from "../Contexts/SudokuContext";

const imagen = require.context("./../img", true);

function BotonModo(props) {
    
    const {confModo} = useContext(SudokuContext)

    return(
        <button className="btnModo" id={props.modo} onClick={() => confModo(props.modo)}>
            <img src={imagen('./' + props.img)} className="img" alt={props.modo}/>
        </button>
    )
}

export default BotonModo