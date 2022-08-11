import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

const imagen = require.context("./../img", true);

function Help(){

    const {mostrar} = useContext(SudokuContext)

    return(
        <button className="help" onClick={() => mostrar()}><img src={imagen('./lamp.png')}/></button>
    )
}

export default Help