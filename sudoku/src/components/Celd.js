import React, {useContext, useEffect} from "react";
import { SudokuContext } from "../contexts/SudokuContext";
import NumList from './NumList';

function Celd(props){

    const {matriz, resaltar} = useContext(SudokuContext)

    let id = props.r.toString() + props.c.toString()

    return(
        <div className="celd">
            {props.c === 3 || props.c === 6
            ?
            <div className="lineVer"></div>
            :
            null
            }
            
            <div className="celdSection" id={id} onClick={() => resaltar(id)}>
            {matriz[props.r][props.c] === "" 
                ?            
                props.celd.map((num) => {
                    return(
                        <NumList 
                            num = {num}
                            id = {id}
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
