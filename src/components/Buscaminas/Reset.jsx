import React, { useContext } from "react";
import { BuscaminasContext } from "../../contexts/BuscaminasContext";

function Reset() {
    
    const {newGame, gameOn} = useContext(BuscaminasContext)

    return(
        <button className="reset" id="reset" onClick={() => newGame()} disabled={!gameOn}>↻</button>
    )
}

export default Reset;