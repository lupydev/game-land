import React, {useContext} from "react";
import {SudokuContext} from '../contexts/SudokuContext'

function NewGame(){

    const {newGame} = useContext(SudokuContext)

    const reset = () =>{
        newGame()
    }

    return(
        <div className="newGame">
            <button className="btn" onClick={reset}>
                New Game
            </button>
        </div>
    )
}

export default NewGame;