import React, {useContext, useEffect} from "react";
import { SudokuContext } from "../Contexts/SudokuContext";
import NumList from './NumList';

const imagen = require.context("./../img", true); 

function Celd(props){

    const {matriz, resaltar, blockValues} = useContext(SudokuContext)

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
                    <img src={blockValues[props.r][props.c]
                                ?
                                imagen('./' + matriz[props.r][props.c].toString() + 'B.png')
                                :
                                imagen('./' + matriz[props.r][props.c].toString() + 'G.png')
                                } 
                        alt={matriz[props.r][props.c]}
                    />
                </div>
            }
            </div>
        </div>
    )
}

export default Celd
