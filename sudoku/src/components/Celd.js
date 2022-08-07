import React, {useContext, useEffect} from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import NumList from './NumList';

function Celd(props){

    const {matriz, resaltar} = useContext(SudokuContext)

    return(
        <div className="celd">
            {props.c === 3 || props.c === 6
            ?
            <div className="lineVer"></div>
            :
            null
            }
            
            <div className="celdSection" id={props.r.toString() + props.c.toString()}>
            {matriz[props.r][props.c] === "" 
                ?            
                props.celd.map((num) => {
                    return(
                        <NumList 
                            num = {num}
                            id = {props.r.toString() + props.c.toString()}
                        />
                    )                
                })
                
                :

                <div className="checkNumber" onClick={() => resaltar(props.r.toString() + props.c.toString())}>
                    <p>{matriz[props.r][props.c]}</p>
                </div>
            }
            </div>
        </div>
    )
}

export default Celd
