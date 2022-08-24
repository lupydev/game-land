import React, { useContext } from "react";
import { BuscaminasContext } from "../../contexts/BuscaminasContext";
import BotonModo from "./BotonModo";
import { Footer } from '../../components/Footer';
const imagen = require.context("./../../img", true);

function Instruction() {
    
    const {cerrar} = useContext(BuscaminasContext)

    return(
        <div className="instruction">
            <h2 className="instruction-closeInst"  onClick={() => cerrar()}>X</h2>
            <h3>¿Cómo se Juega?</h3>

            <p>La meta es descubrir todas las casillas que no contengan una mina.</p>
            <p>Hay 3 contenidos posibles para cada casilla:</p>
            <ul>
                <li>
                    <img src={imagen('./mina.png')} alt='Mina'/>
                    <p><span>Mina: </span>Si descubres una mina estas muerto.</p>
                </li>

                <li>
                    <img src={imagen('./vacio.png')} alt='Vacio'/>
                    <p><span>Vacio: </span>Si la casilla no contiene nada automaticamente se descubriran todas las casillas adyasentes que no contengan una mina</p>
                </li>

                <li>
                    <img src={imagen('./numero.png')} alt='Numero' />
                    <p><span>Numero: </span>Si la casilla contiene un numero, te estara indicando cuantas casillas adyasentes a ella (incluye diagonales), contienen una mina. Los colores solo son una ayuda visual pero no indican nada en especial.</p>
                </li>
            </ul>

            <h3>Modos:</h3>

            <p>Puedes seleccionar el modo en el que interactuas con el tablero, segun lo creas conveniente:</p>
            
            <ul>
                <li>
                    <BotonModo
                        img = {"select.png"}
                        disable = {true}
                    />
                    <p><span>Seleccion: </span>Seleccionas la casilla que deseas descubrir.</p><br></br>
                    
                </li>

                <li>
                    <BotonModo
                        img = {"flag.png"}
                        disable = {true}
                    />
                    <p><span>Bandera: </span>Te permite, marcar una casilla con una bandera cuando crees que alli hay una mina, de esta forma se bloquea e impide que la descubras accidentalmente, ademas de que te permite mantener un seguimiento de donde se encuentran las minas.</p>
                    
                </li>
                <li>
                    <BotonModo
                        img = {"question.png"}
                        disable = {true}
                    />
                    <p><span>Interrogacion: </span>Con este modo puedes marcar donde no estas seguro si hay una mina o no, pero ten cuidado, de esta forma no se bloque la casilla y aun puedes seleccionarla.</p>
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