import React, { useContext, useEffect } from "react";
import { BuscaminasContext } from "../../Contexts/BuscaminasContext";

const imagen = require.context("./../../img", true);

function BotonModo(props) {
    
    const {confModo} = useContext(BuscaminasContext)

    return(
        <button className="btnModo" id={props.modo} onClick={() => confModo(props.modo)} disabled={props.disable}>
            <img src={imagen('./' + props.img)} className="img" alt={props.modo}/>
        </button>
    )
}

export default BotonModo