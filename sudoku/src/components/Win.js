import { React, useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

function Win(){

    const {tiempo} = useContext(SudokuContext)

    return(
        <div className="win">
            <p className="congrats">!Felicitacione Ganaste!</p>
            <p className="time">Tu tiempo fue: {tiempo}</p>
        </div>
    )
}

export default Win