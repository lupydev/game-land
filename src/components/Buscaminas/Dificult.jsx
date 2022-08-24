import React, { useContext } from "react";
import { BuscaminasContext } from "../../contexts/BuscaminasContext";
import Choise from "./Choise";

function Dificult(){

    const {startGame, dificultad} = useContext(BuscaminasContext)

    return(
        <div className="dificult" id="buscaminas-dificult">
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

            <button className="dificult-aceptar" onClick={() => startGame(dificultad)}>Aceptar</button>
        </div>
    )
}

export default Dificult