import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

function BotonLapiz() {
    
    const {confModo} = useContext(SudokuContext)

    return(
        <button className="btnLapiz" onClick={() => confModo("lapiz")}>Lap</button>
    )
}

export default BotonLapiz