import React, { useContext } from "react";
import { BuscaminasContext } from "../../contexts/BuscaminasContext";

function Choise(props) {

    const {selectDif} = useContext(BuscaminasContext)

    return(
        <button className="choice" id={props.id} onClick={() => selectDif(props.id)}>{props.choise}</button>
    )    
}

export default Choise;