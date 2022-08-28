import React, { useContext, useEffect } from "react";
import { SudokuProvider } from "../../contexts/SudokuContext";
import Help from "./Help";
import Main from "./Main";
import NewGame from "./NewGame";
import Instruction from "./Instruction";
import Dificult from "./Dificult";
import Reset from "./Reset";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { GlobalContext } from "../../contexts/GlobalContext";

function Sudoku(){

    const {promedio, getRanking} = useContext(GlobalContext)

    getRanking("sudoku")

    useEffect (() =>{
        console.log(promedio);
    }, [promedio])

    return(
        <SudokuProvider>
            <div className="sudokuApp">
                <Header />
                <NavBar />
                <div className="sudoku">
                    <div className="sudoku-instructionDiv" id="instDiv">
                        <Instruction />            
                    </div> 

                    <div className='sudoku-head'>
                        <NewGame />
                        <Reset />
                        <Help />
                        <Dificult />
                    </div>
                    
                    <Main />              
                </div>
            </div>
        </SudokuProvider>
    )
}

export default Sudoku;
