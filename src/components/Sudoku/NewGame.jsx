import React, {useContext} from "react";
import {SudokuContext} from '../../Contexts/SudokuContext'

function NewGame(){

    const {winner, resetGame, newGToggle} = useContext(SudokuContext)

    return(
        <div className="newGame">
            {winner
            ?
            <button className="newGame-btn" onClick={() => resetGame()}>
                Volver
            </button>
            :
            <button className="newGame-btn" onClick={() => newGToggle()}>
                ▶
            </button>
            }
            
        </div>
    )
}

export default NewGame;