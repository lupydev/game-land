import React from "react";
import Board from './Board'
import BotonModo from './BotonModo';


function Main(){
    
    return(
        <div className="mainBuscaminas">            
            <Board />

            <div className='btnModoList'>
                <BotonModo
                    modo = "buscar"
                    img = "select.png"
                    disable = {false}
                />
                <BotonModo
                    modo = "bandera"
                    img = "flag.png"
                    disable = {false}
                />
                <BotonModo
                    modo = "duda"
                    img = "question.png"
                    disable = {false}
                />                    
            </div>            
        </div>
    )
}

export default Main