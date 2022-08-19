import React, {useContext} from "react";
import {BuscaminasContext} from '../../contexts/BuscaminasContext'

function NewGame(){

    const {winner, startGame, newGToggle} = useContext(BuscaminasContext)

    return(
        <div className="newGame">
            {winner
            ?
            <button className="newGame-btn" onClick={() => startGame()}>
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