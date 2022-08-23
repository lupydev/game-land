import React, { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import Choise from "./Choise";

function Dificult(){

    const {startGame, dificultad} = useContext(SudokuContext)

    return(
        <div className="dificult" id="sudoku-dificult">
            <Choise
                id = "facil"
                choise = "FÁCIL"
            />
            <Choise
                id = "medio"
                choise = "MEDIO"
            />
            <Choise
                id = "dificil"
                choise = "DIFÍCIL"
            />

            <button className="sudoku-aceptar" onClick={() => startGame(dificultad)}>Aceptar</button>
        </div>
    )
}

export default Dificult