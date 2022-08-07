import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

function BotonLapiz() {
    
    const {confModo} = useContext(SudokuContext)

    return(
        <button className="btnModo" onClick={() => confModo("lapiz")}>Lapiz</button>
    )
}

export default BotonLapiz