import { Letra } from "./Letra";
import { Teclado } from "./Teclado";

export const Wordle = () => {

  return (
    <>
    <div className="tablero-container">
      <div className="tablero">
        <div className="fila">
          <Letra posicion={0} valor={0}/>
          <Letra posicion={1} valor={0}/>
          <Letra posicion={2} valor={0}/>
          <Letra posicion={3} valor={0}/>
          <Letra posicion={4} valor={0}/>
        </div>
        <div className="fila">
          <Letra posicion={0} valor={1}/>
          <Letra posicion={1} valor={1}/>
          <Letra posicion={2} valor={1}/>
          <Letra posicion={3} valor={1}/>
          <Letra posicion={4} valor={1}/>
        </div>
        <div className="fila">
          <Letra posicion={0} valor={2}/>
          <Letra posicion={1} valor={2}/>
          <Letra posicion={2} valor={2}/>
          <Letra posicion={3} valor={2}/>
          <Letra posicion={4} valor={2}/>
        </div>
        <div className="fila">
          <Letra posicion={0} valor={3}/>
          <Letra posicion={1} valor={3}/>
          <Letra posicion={2} valor={3}/>
          <Letra posicion={3} valor={3}/>
          <Letra posicion={4} valor={3}/>
        </div>
        <div className="fila">
          <Letra posicion={0} valor={4}/>
          <Letra posicion={1} valor={4}/>
          <Letra posicion={2} valor={4}/>
          <Letra posicion={3} valor={4}/>
          <Letra posicion={4} valor={4}/>
        </div>
        <div className="fila">
          <Letra posicion={0} valor={5}/>
          <Letra posicion={1} valor={5}/>
          <Letra posicion={2} valor={5}/>
          <Letra posicion={3} valor={5}/>
          <Letra posicion={4} valor={5}/>
        </div>
      </div>
      <Teclado/>
    </div>
    </>
  )
}
