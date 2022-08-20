import { useContext } from "react";
import { Context } from "../../Context/Context";

export const Casilla = ({y, x}) => {
    const { tablero, intentoActual, palabraGanadora } = useContext(Context);
    const casilla = tablero[y][x];

    const exacto = palabraGanadora[x] === casilla;
    const existe = !exacto && casilla !== "" && palabraGanadora.includes(casilla);
    const chequeo = intentoActual.y > y && (exacto ? "exacto" : existe ? "existe" : "inexistente");

  return (
    <div className="casilla" id={chequeo}>{casilla}</div>
  )
  
}
