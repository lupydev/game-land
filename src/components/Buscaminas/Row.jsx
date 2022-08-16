import React from "react";
import Celd from "./Celd";

function Row(props) {
    
    return(
        <div className="rowBuscaminas">
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