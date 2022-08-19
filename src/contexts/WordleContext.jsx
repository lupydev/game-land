import { createContext, useState } from 'react';
import { tableroDefault } from '../components/Wordle/Matriz';

export const Context = createContext({});

export const ContextApp = ({children}) => { 

    /* ---------------------------------------------------------*/
    /*                          WORDLE                          */

    const [tablero, setTablero] = useState(tableroDefault) 
    const [intentoActual, setIntentoActual] = useState({y: 0, x: 0})
    const [palabraGanadora, setPalabraGanadora] = useState("BRUNO");
    const [win, setWin] = useState(false);

    const onSeleccion = (valor) => {
        if(intentoActual.x > 4) return;
        const newTablero = [...tablero];
        newTablero[intentoActual.y][intentoActual.x] = valor;
        setTablero(newTablero);
        setIntentoActual({...intentoActual, x: intentoActual.x + 1})
    } 
    const onEnter = () => {
        const indice = intentoActual.y
        const palabra = tablero[indice].join("");
        if (intentoActual.x !== 5 || palabra === palabraGanadora) {
            setWin(true);
            return; 
        }
        setIntentoActual({y: intentoActual.y + 1, x: 0});
        console.log(palabra)
    }
    const onDel = () => {
        const indice = intentoActual.y
        const palabra = tablero[indice].join("");
        if (intentoActual.x === 0 || palabra === palabraGanadora) {
            setWin(true);
            return; 
        }
        const newTablero = [...tablero];
        newTablero[intentoActual.y][intentoActual.x - 1] = "";
        setTablero(newTablero);
        setIntentoActual({...intentoActual, x: intentoActual.x - 1});
    }
    /* ---------------------------------------------------------*/

    return(
        <Context.Provider value={{tablero, setTablero, intentoActual, setIntentoActual, onSeleccion, onEnter, onDel, win, palabraGanadora}}>
            {children}
        </Context.Provider>
    )
}
