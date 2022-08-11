import React, { useContext } from "react";
import { SudokuContext } from "../contexts/SudokuContext";

function Instruction() {
    
    const {cerrar} = useContext(SudokuContext)

    return(
        <div className="instruction">
            <button className="closeInst"  onClick={() => cerrar()}>X</button>
            <h3>¿Cómo se Juega?</h3>

            <p>La meta del sudoku es rellenar las celdas con número de 1 a 9.</p>
            <p>Los números se colocan en 9 cuadrados, cada uno de 3x3, por lo que en cada 
                línea, columna y cuadrado hay 9 casillas.</p>
            <p>Solo puede usarse el mismo dígito una vez en cada línea, columna y cuadrado.</p>
            <p>El nivel de dificultad depende de cuántos dígitos estén ya indicados en las 
                celdas.</p>

            <h3>Herramientas opcionales:</h3>

            <p>Ten en cuenta que mientras mas herramientas utilices menos sea tu puntaje final.</p>
            <p>La herramientas que puedes utilizar son:</p>
            <ul>
                <li>
                    <span>Lapiz: </span>Te permite anotar posibles numeros sin que se tengan 
                en cuenta ni se computen.
                </li>
                <li><span>Resaltar repetido: </span> Si intruces un numero que ya se encuentra 
                en la misma fila, clumna o cuandrado, se marcara en rojo.</li>
                <li><span>Contador de Numeros: </span> A medida que coloques numeros los botones 
                de los mismos te indicaran cuantos has ingresados, bloqueadose el boton una vez que 
                las 9 instancias del mismo esten colocadas en el tablero.</li>
            </ul>

            <h3>Puntaje:</h3>

            <p>La meta del sudoku es rellenar las celdas con número de 1 a 9.</p>
            <p>Los números se colocan en 9 cuadrados, cada uno de 3x3, por lo que en cada 
                línea, columna y cuadrado hay 9 casillas.</p>
            <p>Solo puede usarse el mismo dígito una vez en cada línea, columna y cuadrado.</p>
            <p>El nivel de dificultad depende de cuántos dígitos estén ya indicados en las 
                celdas.</p>
            <br></br>
            <br></br>
        </div>
    )
}

export default Instruction