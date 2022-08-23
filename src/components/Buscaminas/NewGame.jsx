import React, {useContext} from "react";
import {BuscaminasContext} from '../../contexts/BuscaminasContext'

function NewGame(){

    const {winner, resetGame, newGame} = useContext(BuscaminasContext)

    return(
        <div className="newGame">
            {/* {winner
            ?
            <button className="newGame-btn" onClick={() => resetGame()}>
                Volver
            </button>
            : */}
            <button className="newGame-btn" onClick={() => newGame()}>
                ▶
            </button>
            {/* } */}
            
        </div>
    )
}

export default NewGame;