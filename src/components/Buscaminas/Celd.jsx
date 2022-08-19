import React, { useContext, useEffect } from "react";
import { BuscaminasContext } from "../../contexts/BuscaminasContext";

function Celd(props) {
    
    const {show, digAt, marks} = useContext(BuscaminasContext)

    const id = props.r.toString().padStart(2, "0") + props.c.toString().padStart(2, "0")

    return(
        <div className="celdBuscaminas" id={id} onClick={() => digAt(props.r, props.c)} >

            {show[props.r][props.c]
            ?
                <p>{props.celd}</p>
            :
                <p>{marks[props.r][props.c]}</p>
            }
        </div>
    )
}

export default Celd;