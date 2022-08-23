import { useContext } from "react";
import { Casilla } from "./Casillas";
import { Teclado } from "./Teclado";
import { Context } from "../../contexts/WordleContext";

export const Wordle = () => {

  const { win } = useContext(Context)

  return (
    <>
    <div className="tablero-container">
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
      </div>
      <Teclado/>
      {win && 
        <div>
          <h1>GANASTE!!!</h1>
        </div>
      }
    </div>
    </>
  )
}
