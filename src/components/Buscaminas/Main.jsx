import React, { useContext } from "react";
import { BuscaminasContext } from "../../contexts/BuscaminasContext";
import Board from './Board'
import BotonModo from './BotonModo';


function Main(){
    
    const {gameOn} = useContext(BuscaminasContext)
    
    return(
        <div className="mainBuscaminas">            
            <Board />

            <div className='btnModoList'>
                <BotonModo
                    modo = "buscar"
                    img = "select.png"
                    disable = {!gameOn}
                />
                <BotonModo
                    modo = "bandera"
                    img = "flag.png"
                    disable = {!gameOn}
                />
                <BotonModo
                    modo = "duda"
                    img = "question.png"
                    disable = {!gameOn}
                />                    
            </div>            
        </div>
    )
}

export default Main