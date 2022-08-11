import { useContext } from "react";
import { Context } from "../../Context/Context";

export const Letra = ({posicion, valor}) => {
    const { tablero } = useContext(Context);
    const letra = tablero[valor][posicion]
  return (
    <div className="letra">{letra}</div>
  )
}
