import React, {useContext, useEffect} from "react";
import { SudokuContext } from "../../Contexts/SudokuContext";
import NumList from './NumList';

const imagen = require.context("./../../img", true); 

function Celd(props){

    const {matriz, resaltar, blockValues} = useContext(SudokuContext)

    let id = props.r.toString() + props.c.toString()
    let number = ["","","","","","","","",""]

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
                    {blockValues[props.r][props.c]
                    ?
                        <p className="blockValue">{matriz[props.r][props.c]}</p>
                    :
                        <p className="unBlockValue">{matriz[props.r][props.c]}</p>
                    } 
                </div>
            }
            </div>
        </div>
    )
}

export default Celd
