import {createContext, useState} from 'react';
import { tableroDefault } from '../components/Wordle/Logica';

export const Context = createContext({});

export const ContextApp = ({children}) => { 

    /* ---------------------------------------------------------*/
    /*                          WORDLE                          */
    const [tablero, setTablero] = useState(tableroDefault)
    const [intentoActual, setIntentoActual] = useState({y: 0, x: 0})

    const onSeleccion = (valor) => {
        if(intentoActual.x > 4) return;
        const newTablero = [...tablero];
        newTablero[intentoActual.y][intentoActual.x] = valor;
        setTablero(newTablero);
        setIntentoActual({...intentoActual, x: intentoActual.x + 1})
    } 
    const onEnter = () => {
        if(intentoActual.x !== 5) return;
        setIntentoActual({y: intentoActual.y + 1, x: 0});
    }
    const onDel = () => {
        if(intentoActual.x === 0) return;
        const newTablero = [...tablero];
        newTablero[intentoActual.y][intentoActual.x - 1] = "";
        setTablero(newTablero);
        setIntentoActual({...intentoActual, x: intentoActual.x - 1});
    }
    /* ---------------------------------------------------------*/

    return(
        <Context.Provider value={{tablero, setTablero, intentoActual, setIntentoActual, onSeleccion, onEnter, onDel}}>
            {children}
        </Context.Provider>
    )
}