import React, {useContext, useEffect} from "react";
import {SudokuContext} from '../contexts/SudokuContext'
import Row from './Row';

function Board(){

    const {posiblesNumbers, matriz} = useContext(SudokuContext)

    return(
        <div className="board">
            {posiblesNumbers.map((row) =>{
                return(
                    <Row 
                        row = {row} 
                        r = {posiblesNumbers.indexOf(row)}                        
                    />
                )
            })}
            
        </div>
    )
}

export default Board