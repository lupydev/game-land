import React from "react";
import { SudokuProvider } from "../../Contexts/SudokuContext";
import Help from "./Help";
import Main from "./Main";
import NewGame from "./NewGame";
import Instruction from "./Instruction";
import Dificult from "./Dificult";

function Sudoku(){

    return(
        <SudokuProvider>
            <div className="sudoku">
                <div className="sudoku-instructionDiv" id="instDiv">
                        <Instruction />            
                </div> 

                <div className='sudoku-head'>
                    <NewGame />
                    
                    <Help />
                    <Dificult />
                </div>
                
                <Main />              
            </div>
        </SudokuProvider>
    )
}

export default Sudoku;
