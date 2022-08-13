import React, { useContext } from "react";
import Board from './Board'
import BotonNum from './BotonNum';
import Borrar from './Borrar';
import BotonModo from './BotonModo';
import { SudokuContext } from "../../Contexts/SudokuContext";


function Main(){
    const numeros = [1,2,3,4,5,6,7,8,9]

    return(
        <div className="mainSudoku">
            <div>
                <Board />

                <div className='btnModoList'>
                    <BotonModo
                        modo = "lapiz"
                        img = "pencil.png"
                        disable = {false}
                    />
                    <BotonModo
                        modo = "tinta"
                        img = "pen.png"
                        disable = {false}
                    />
                    <Borrar 
                        disable = {false}
                    />
                </div>

                <div className='btnNumList'>
                    {numeros.map((n) => {
                        return(
                            <BotonNum
                                n = {n}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main