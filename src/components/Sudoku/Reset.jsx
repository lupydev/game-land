import React, { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";

function Reset() {
    
    const {newGame} = useContext(SudokuContext)

    return(
        <button className="reset" onClick={() => newGame()}>↻</button>
    )
}

export default Reset;