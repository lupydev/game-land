import React, {useContext} from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import NumList from './NumList';

function Celd(props){

    const {matriz} = useContext(SudokuContext)

    return(
        <div className={(props.c === 0 || props.c === 3 || props.c === 6) ? "celd leftLine" : props.c === 8 ? "celd rightLine" : "celd"}
            id={props.r.toString() + props.c.toString()}>

            {matriz[props.r][props.c] === "" 
                ?
            
                props.celd.map((num) => {
                    return(
                        <NumList 
                            num = {num}
                        />
                    )                
                })
                
                :

                <div className="checkNumber">
                    <p>{matriz[props.r][props.c]}</p>
                </div>
            }
                
            
        </div>
    )
}

export default Celd
