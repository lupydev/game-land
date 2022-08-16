import React, { useContext } from "react";
import { SudokuContext } from "../../Contexts/SudokuContext";

function Reset() {
    
    const {newGame} = useContext(SudokuContext)

    return(
        <button className="reset" onClick={() => newGame()}>↻</button>
    )
}

export default Reset;