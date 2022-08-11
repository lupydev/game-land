import React, {useContext} from "react";
import {SudokuContext} from '../contexts/SudokuContext'

function NewGame(){

    const {newGame, winner, resetGame} = useContext(SudokuContext)

    const reset = () =>{
        newGame()
    }

    return(
        <div className="newGame">
            {winner
            ?
            <button className="btn" onClick={() => resetGame()}>
                Volver
            </button>
            :
            <button className="btn" onClick={reset}>
                New Game
            </button>
            }
            
        </div>
    )
}

export default NewGame;