import React from "react";
import { SudokuProvider } from "../../Contexts/SudokuContext";
import Help from "./Help";
import Main from "./Main";
import NewGame from "./NewGame";
import Instruction from "./Instruction";
import Dificult from "./Dificult";
import Reset from "./Reset";

function Sudoku(){

    return(
        <SudokuProvider>
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
        </SudokuProvider>
    )
}

export default Sudoku;
