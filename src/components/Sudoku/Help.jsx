import React, { useContext } from "react";
import { SudokuContext } from "../../Contexts/SudokuContext";

const imagen = require.context("./../../img", true);

function Help(){

    const {mostrar} = useContext(SudokuContext)

    return(
        <button className="help" onClick={() => mostrar()}>💡</button>
    )
}

export default Help