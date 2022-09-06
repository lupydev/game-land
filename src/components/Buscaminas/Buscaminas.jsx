import React, { useContext, useEffect } from "react";
import Help from "./Help";
import NewGame from "./NewGame";
import Dificult from "./Dificult";
import Reset from "./Reset";
import Main from "./Main";
import { BuscaminasProvider } from "../../contexts/BuscaminasContext";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import Instruction from "./Instruction";
import { GlobalContext } from "../../contexts/GlobalContext";

function Buscaminas() {
    
    const {promedio, getRanking} = useContext(GlobalContext)

    getRanking("buscaMinas")

    return(
        <BuscaminasProvider>
            <div className="buscaminasApp">
                <Header />
                <NavBar />
                <div className="buscaminas">
                    <div className="buscaminas-instructionDiv" id="instDiv">
                        <Instruction />            
                    </div> 

                    <div className='buscaminas-head'>
                        <NewGame />
                        <Reset />
                        <Help />
                        <Dificult />
                    </div>
                    
                    <Main />              
                </div>
            </div>
        </BuscaminasProvider>
    )
}

export default Buscaminas;