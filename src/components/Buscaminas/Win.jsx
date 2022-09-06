import { React, useContext } from "react";
import { BuscaminasContext } from "../../contexts/BuscaminasContext";

function Win(){

    const {tiempo,formatTime,puntaje} = useContext(BuscaminasContext)

    const time = formatTime(tiempo)

    return(
        <div className="win-buscaminas">
            <p className="congrats">!Felicitaciones</p>
            <p className="congrats">Ganaste!</p>
            <p className="time">⏱️Tu tiempo fue: {time[0]}:{time[1]}:{time[2]}.{time[3]}</p>
            <p className="puntaje">Obtuviste un puntaje total de: <span>{puntaje}</span></p>
        </div>
    )
}

export default Win