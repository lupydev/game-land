import {useContext} from 'react';
import { Context } from '../../Context/Context';

export const Teclas = ({valor, especial}) => {

    const {onSeleccion, onEnter, onDel} = useContext(Context);

    const seleccion = () => {
        if (valor === "ENTER"){
           onEnter();
        } else if (valor === "DEL") {
            onDel();
        } else {
            onSeleccion(valor);
        }
    }

  return (
    <div className='teclas' id={especial && "especial"} onClick={seleccion}>{valor}</div>
  )
}
