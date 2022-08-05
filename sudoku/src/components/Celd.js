import React, {useContext} from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import NumList from './NumList';

function Celd(props){

    const {matriz} = useContext(SudokuContext)
    
    return(
        <div className="celd">
            {props.celd.map((num) => {
                return(
                    
                    <NumList 
                        num = {num}
                    />
                )                
            })}
            
        </div>
    )
}

export default Celd
