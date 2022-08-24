import React, { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import { Footer } from "../Footer";
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
                    <BotonModo
                        img = {"pencil.png"}
                        disable = {true}
                    />
                    <p><span>Lapiz: </span>Te permite anotar posibles numeros sin que se tengan 
                en cuenta ni se computen.</p><br></br>
                    
                </li>

                <li>
                    <BotonModo
                        img = {"pen.png"}
                        disable = {true}
                    />
                    <p><span>Tinta: </span> Si tienes seleccionado este modo, el numero que introduzcas es el numero que crees que va de forma definitiva en esa posicion.</p>
                    
                </li>
                <li>
                    <Borrar
                        disable = {true}
                    />
                    <p><span>Goma: </span> Con este boton puedes borrar lo que hayas escrito en la celda, recuerda que borrara segun el modo que tengas seleccionado ("Tinta" o "Lapiz").</p>
                </li>
            </ul>

            <h3>Puntaje:</h3>

            <p>El puntaje que obtengas dependera de la dificultad seleccionada y el tiempo que demores en hacerlo.</p>
            <p>En cada dificultad obtendras un puntaje base por tan solo ganar la partida, y a su vez obtendras un extra por hacerlo en menos de 30 min. Mientras menos demores mayor sera el puntaje extra.</p>
            
            <ul>
                <li>
                    <p><span>Facil: </span> Obtienes una base de 500 pts y un extra de hasta 2700 pts (Puntaje Maximo: 3200 pts)</p>
                </li>
                <li>
                    <p><span>Medio: </span> Obtienes una base de 2000 pts y un extra de hasta 4000 pts (Puntaje Maximo: 6000 pts)</p>
                </li>
                <li>
                    <p><span>Difícil: </span> Obtienes una base de 3000 pts y un extra de hasta 7000 pts (Puntaje Maximo: 10000 pts)</p>
                </li>
            </ul>
            <br></br>
            <br></br>

            <Footer />
        </div>
    )
}

export default Instruction