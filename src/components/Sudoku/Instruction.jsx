import React, { useContext } from "react";
import { SudokuContext } from "../../Contexts/SudokuContext";
import Borrar from "./Borrar";
import BotonModo from "./BotonModo";

function Instruction() {
    
    const {cerrar} = useContext(SudokuContext)

    return(
        <div className="instruction">
            <h2 className="instruction-closeInst"  onClick={() => cerrar()}>X</h2>
            <h3>¿Cómo se Juega?</h3>

            <p>La meta del sudoku es rellenar las celdas con número de 1 a 9.</p>
            <p>Los números se colocan en 9 cuadrados, cada uno de 3x3, por lo que en cada 
                línea, columna y cuadrado hay 9 casillas.</p>
            <p>Solo puede usarse el mismo dígito una vez en cada línea, columna y cuadrado.</p>
            <p>El nivel de dificultad depende de cuántos dígitos estén ya indicados en las 
                celdas.</p>

            <h3>Anotacion:</h3>

            <p>Puedes seleccionar el modo en que anotas en el tablero, segun lo creas conveniente:</p>
            
            <ul>
                <li>
                    <span>Lapiz: </span>Te permite anotar posibles numeros sin que se tengan 
                en cuenta ni se computen.<br></br>
                    <BotonModo
                        img = {"pencil.png"}
                        disable = {true}
                    />
                </li>

                <li>
                    <span>Tinta: </span> Si tienes seleccionado este modo, el numero que introduzcas es el numero que crees que va de forma definitiva en esa posicion.
                    <BotonModo
                        img = {"pen.png"}
                        disable = {true}
                    />
                </li>
                <li><span>Goma: </span> Con este boton puedes borrar lo que hayas escrito en la celda, recuerda que borrara segun el modo que tengas seleccionado ("Tinta" o "Lapiz").
                    <Borrar
                        disable = {true}
                    />
                </li>
            </ul>

            <h3>Puntaje:</h3>

            <p>El puntaje que obtengas dependera de la dificultad seleccionada.</p>
            
            <ul>
                <li>
                    <span>Facil: </span> 3 puntos por juego.
                </li>
                <li>
                    <span>Medio: </span> 6 puntos por juego.
                </li>
                <li>
                    <span>Difícil: </span> 9 puntos por juego.
                </li>
            </ul>
            <br></br>
            <br></br>
        </div>
    )
}

export default Instruction