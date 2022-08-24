import React, { useContext } from "react";
import { BuscaminasContext } from "../../contexts/BuscaminasContext";

const imagen = require.context("./../../img", true);

function Help(){

    const {mostrar} = useContext(BuscaminasContext)

    return(
        <button className="help" onClick={() => mostrar()}>💡</button>
    )
}

export default Help