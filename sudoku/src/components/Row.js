import React from "react";
import Celd from './Celd'

function Row(props) {
    
    return(
        <div className="row">
            {props.row.map((celd) => {
                return(
                    <Celd 
                        celd = {celd}
                    />
                )
            })}
        </div>
    )
}

export default Row;