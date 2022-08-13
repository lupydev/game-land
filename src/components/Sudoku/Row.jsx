import React from "react";
import Celd from './Celd'

function Row(props) {
    
    return(
        <div className="row">
            {props.r === 3 || props.r === 6
            ?
            <div className="lineHor"></div>
            :
            null
            }

            <div className="rowSection">
                {props.row.map((celd) => {
                    return(
                        <Celd 
                            celd = {celd}
                            c = {props.row.indexOf(celd)}
                            r = {props.r}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Row;