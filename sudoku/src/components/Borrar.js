import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

const imagen = require.context("./../img", true);

function Borrar(){

    const {selected, borrar} = useContext(SudokuContext)

    return(
        <button className="btnModo" id="goma" onClick={() => borrar(selected)}>
            <img src={imagen('./goma.png')} className="img" alt="Lapiz"/>
        </button>
    )
}

export default Borrar