import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

function BotonTinta() {
    
    const {confModo} = useContext(SudokuContext)

    return(
        <button className="btnTinta" onClick={() => confModo("tinta")}>Tin</button>
    )
}

export default BotonTinta