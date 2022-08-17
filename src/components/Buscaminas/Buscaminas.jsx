import React from "react";
// import Instruction from "./Instruction";
import Help from "./Help";
import NewGame from "./NewGame";
import Dificult from "./Dificult";
import Reset from "./Reset";
import Main from "./Main";
import { BuscaminasProvider } from "../../Contexts/BuscaminasContext";

function Buscaminas() {
    
    return(
        <BuscaminasProvider>
            <div className="buscaminas">
                {/* <div className="buscaminas-instructionDiv" id="instDiv">
                    <Instruction />            
                </div>  */}

                <div className='buscaminas-head'>
                    <NewGame />
                    <Reset />
                    <Help />
                    <Dificult />
                </div>
                
                <Main />              
            </div>
        </BuscaminasProvider>
    )
}

export default Buscaminas;