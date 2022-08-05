import React, {useContext, useEffect} from "react";
import {SudokuContext} from '../contexts/SudokuContext'
import Row from './Row';

function Board(){

    const {validNumbers, newGame, matriz} = useContext(SudokuContext)
    
    return(
        <div className="board">
            {validNumbers.map((row) =>{
                return(
                    <Row 
                        row = {row} 
                        
                    />
                )
            })}
            
        </div>
    )
}

export default Board