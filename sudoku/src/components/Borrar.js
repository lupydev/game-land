import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

function Borrar(){

    const {selected, borrar} = useContext(SudokuContext)

    return(
        <button className="btnModo" onClick={() => borrar(selected)}>Borrar</button>
    )
}

export default Borrar