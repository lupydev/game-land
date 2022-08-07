import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

function BotonTinta() {
    
    const {confModo} = useContext(SudokuContext)

    return(
        <button className="btnModo" onClick={() => confModo("tinta")}>Tinta</button>
    )
}

export default BotonTinta