import { useContext } from "react";
import { Casilla } from "./Casillas";
import { Teclado } from "./Teclado";
import { Context } from "../../Context/Context";

export const Wordle = () => {

  const { win, seleccion, setSeleccion, palabraGanadora, setJuego } = useContext(Context);

  const seleccionDificultad = () => {
    setSeleccion("FACIL");
    setJuego(true);
  }
  const reset = () => {
    setSeleccion("");
    setJuego(false);
  }

  return (
    <>
      <div className="tablero-container">
        {seleccion === "" &&
          <div className="dificultad">
              <h1>Selecciona la dificultad:</h1>
              <button className="botonDificultad"  onClick={seleccionDificultad}>Fácil</button>
              <button className="botonDificultad">Medio</button>
              <button className="botonDificultad">Difícil</button>
          </div>
        }
        {seleccion === "FACIL" && <>
          <button onClick={reset}>reset</button>
          <div className="tablero">
            <div className="fila">
              <Casilla x={0} y={0}/>
              <Casilla x={1} y={0}/>
              <Casilla x={2} y={0}/>
              <Casilla x={3} y={0}/>
              <Casilla x={4} y={0}/>
            </div>
            <div className="fila">
              <Casilla x={0} y={1}/>
              <Casilla x={1} y={1}/>
              <Casilla x={2} y={1}/>
              <Casilla x={3} y={1}/>
              <Casilla x={4} y={1}/>
            </div>
            <div className="fila">
              <Casilla x={0} y={2}/>
              <Casilla x={1} y={2}/>
              <Casilla x={2} y={2}/>
              <Casilla x={3} y={2}/>
              <Casilla x={4} y={2}/>
            </div>
            <div className="fila">
              <Casilla x={0} y={3}/>
              <Casilla x={1} y={3}/>
              <Casilla x={2} y={3}/>
              <Casilla x={3} y={3}/>
              <Casilla x={4} y={3}/>
            </div>
            <div className="fila">
              <Casilla x={0} y={4}/>
              <Casilla x={1} y={4}/>
              <Casilla x={2} y={4}/>
              <Casilla x={3} y={4}/>
              <Casilla x={4} y={4}/>
            </div>
            <div className="fila">
              <Casilla x={0} y={5}/>
              <Casilla x={1} y={5}/>
              <Casilla x={2} y={5}/>
              <Casilla x={3} y={5}/>
              <Casilla x={4} y={5}/>
            </div>
          </div></>
        }
        {!win &&
          <Teclado/>
        }
        {win && 
          <div className="ganar">
            <h1>GANASTE!!!</h1>
            <h2>La palabra fue {palabraGanadora}</h2>
          </div>
        }
       
      </div>
    </>
  )
}
