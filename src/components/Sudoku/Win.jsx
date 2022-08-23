import { React, useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";

function Win(){

    const {tiempo,formatTime} = useContext(SudokuContext)

    const time = formatTime(tiempo)

    return(
        <div className="win">
            <p className="congrats">!Felicitaciones</p>
            <p className="congrats">Ganaste!</p>
            <p className="time">⏱️Tu tiempo fue: {time[0]}:{time[1]}:{time[2]}.{time[3]}</p>
        </div>
    )
}

export default Win