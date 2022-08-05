import React from "react";
import Celd from './Celd'

function Row(props) {
    
    return(
        <div className={(props.r === 0 || props.r === 3 || props.r === 6) ? "row supLine" : props.r === 8 ? "row subLine" : "row"}>
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
    )
}

export default Row;