import React, { useContext, useState } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

function Poner(){

    const {ponerNum, selected} = useContext(SudokuContext)

    const [numero, setNumero] = useState("")
    
    const poner = () => {
        let num = Math.floor(Math.random() * 9 + 1)
        ponerNum(selected, num, false)
        setNumero(num)
    }

    return( 
        <div className="poner">
            <button onClick={poner}>Poner</button>
        </div>
    )
}

export default  Poner;