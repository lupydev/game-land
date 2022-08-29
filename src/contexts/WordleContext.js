import { createContext, useEffect, useState } from 'react';
import { tableroDefault } from '../components/Wordle/Matriz';

export const Context = createContext({});

export const ContextApp = ({children}) => { 

    /* ---------------------------------------------------------*/
    /*                          WORDLE                          */

    const [tablero, setTablero] = useState(tableroDefault) 
    const [intentoActual, setIntentoActual] = useState({y: 0, x: 0})
    const [palabraGanadora, setPalabraGanadora] = useState("");
    const [win, setWin] = useState(false);
    const [seleccion, setSeleccion] = useState("");
    const [palabra, setPalabra] = useState();
    const [juego, setJuego] = useState(false);
    const [timer, setTimer] = useState(Date.now());
    const [puntaje, setPuntaje] = useState(0);

    useEffect(()=>{
        if(palabra === palabraGanadora){
            setWin(true);
        }
    }, [palabra])

    useEffect(()=>{
        partida();
    }, [juego])

    // useEffect(()=>{
    //     let n = 0;
    //     if(juego === true){

    //         setInterval(()=>{
    //             n++
    //         }, 1000)

    //     }
    //     console.log(n);
    //     if(win === true){
    //         setTimer(n)
    //         console.log(timer)
    //     }  
    // }, [])
         
    const partida = () => {
        if(juego === true){
            switch (seleccion) {
                case "FACIL":
                    const facil = animales[Math.floor(Math.random() * animales.length)];
                    setPalabraGanadora(facil);
                    break;
                case "MEDIO":
                    const medio = nombres[Math.floor(Math.random() * nombres.length)];
                    setPalabraGanadora(medio);
                    break;
                case "DIFICIL":
                    const dificil = palabras[Math.floor(Math.random() * palabras.length)];
                    setPalabraGanadora(dificil);
                    break;
                default:
                    break;
            }
        }
    }

    const onSeleccion = (valor) => {
        if(win === true) return;
        if(intentoActual.x > 4) return;
        const newTablero = [...tablero];
        newTablero[intentoActual.y][intentoActual.x] = valor;
        setTablero(newTablero);
        setIntentoActual({...intentoActual, x: intentoActual.x + 1})
    } 
    const onEnter = () => {
        const indice = intentoActual.y
        const palabraW = tablero[indice].join("");
        setPalabra(palabraW)
        if(intentoActual.x !== 5) return;
        setIntentoActual({y: intentoActual.y + 1, x: 0})    
    }
    const onDel = () => {
        const indice = intentoActual.y
        const palabra = tablero[indice].join("");
        if (intentoActual.x === 0 || palabra === palabraGanadora) {
            return; 
        }
        const newTablero = [...tablero];
        newTablero[intentoActual.y][intentoActual.x - 1] = "";
        setTablero(newTablero);
        setIntentoActual({...intentoActual, x: intentoActual.x - 1});
    }
    /* ---------------------------------------------------------*/

    //          ARRAY DE PALABRAS     //

    const animales = ["ABEJA","BURRO","ARAÑA","MOSCA","GANSO","ERIZO","HIENA","DINGO","HURON","KOALA","OVEJA","PIOJO","TEJON","TUCAN","PERRO","GALLO","CABRA","CERDO","RATON","TIGRE","CEBRA","CISNE","LINCE","LLAMA","MORSA","ORUGA","PANDA","OSTRA","POLLO","POTRO","PULGA","PULPO","TAPIR","TEJON","YEGUA","ZORRO","BAGRE"];
    const palabras = ["ABRIL","AGRIO","APOYO","ABAJO","ANIMO","APODO","ACIDO","AYUDA","BARRO","BACHE","BANDA","EBRIO","CALLE","CHINA","CHILE","CERCO","CREMA","COSAS","DADOS","DAGAS","DONAS","DUBAI","ENOJO","EUROS","FUSIL","FOCOS","GAFAS","GANAS","GORRA","HECES","HIGOS","HIJOS","IDEAS","INDIA","ISLAS","JABON","JAPON","JUGOS","JERGA","JOYAS","KENIA","LATAS","LINDA","LEYES","LUCHA","MALTA","MANCO","MANGO","MEDIA","MEMES","MONTE","MOSCU","NIÑOS","NUBES","OBRAS","OPERA","ORDEN","PARIS","PELOS","PESCA","PLAYA","PRADO","QATAR","QUITO","REDES","RATAS","RIMAS","SANTO","SALTA","SIRIA","SUIZA","TRAGO","TORPE","TITAN","TEXAS","VIAJE","VIDEO","WIKIS","YOGUR"];
    const nombres = ["BRUNO", "ROQUE", "PABLO", "HELGA", "LUCHI", "ROCIO", "ELIAN", "LUCIO", "MARIA", "ELISA", "KEVIN", "KAREN", "JULIA", "JUANA", "MARCO", "OSCAR", "PEDRO", "JAIME", "DIEGO", "RAMON", "JORGE", "JESUS", "BRISA", "DARIO","LUCAS","MATEO","SIMON","TOMAS","DANTE", "ELIAS", "RUBEN", "CESAR", "MARIO", "FRIDA", "SOFIA", "LUCIA", "LAURA", "PAULA", "MARTA", "LUISA", "JOANA", "JULIA", "SONIA", "DIANA", "ALEJO", "ANGEL", "ANITA", "ARIEL", "BRIAN", "CIELO", "CLARA", "PILAR", "ROMEO"];


    //---------------------------------------//
    return(
        <Context.Provider value={{tablero, seleccion, juego, setJuego, setSeleccion, setTablero, intentoActual, setIntentoActual, onSeleccion, onEnter, onDel, win, palabraGanadora, timer, setTimer, puntaje, setPuntaje}}>
            {children}
        </Context.Provider>
    )
}
