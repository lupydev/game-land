import { Teclas } from './TeclasTeclado'
import { useEffect, useContext, useCallback } from 'react';
import { Context } from '../../contexts/WordleContext';

export const Teclado = () => {

    const {onSeleccion, onEnter, onDel} = useContext(Context);

    const parte1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const parte2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
    const parte3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleTeclado = useCallback((e) => {
        if (e.key === "Enter") {
            onEnter();
        } else if (e.key === "Backspace") {
            onDel();
        } else {
            parte1.forEach((x) => {
                if (e.key.toLowerCase() === x.toLowerCase()) {
                    onSeleccion(x);
                }
            });
            parte2.forEach((x) => {
                if (e.key.toLowerCase() === x.toLowerCase()) {
                    onSeleccion(x);
                }
            });
            parte3.forEach((x) => {
                if (e.key.toLowerCase() === x.toLowerCase()) {
                    onSeleccion(x);
                }
            });   
        }
      }
    )
    

    useEffect(()=>{
        document.addEventListener("keydown", handleTeclado);

        return () => {
            document.removeEventListener("keydown", handleTeclado);
        };
    }, [handleTeclado]);

  return (
    <div className='teclado' onKeyDown={handleTeclado}>
        <div className='linea1'>
            {parte1.map((x) => {
                return <Teclas valor={x}/>
            })}
        </div>
        <div className='linea2'>
            {parte2.map((x) => {
                return <Teclas valor={x}/>
            })}
        </div>
        <div className='linea3'>
            <Teclas valor={"ENTER"} especial />
            {parte3.map((x) => {
                return <Teclas valor={x}/>
            })}
            <Teclas valor={"DEL"} especial />
        </div>
    </div>
  )
}
