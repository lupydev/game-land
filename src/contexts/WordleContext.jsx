import { createContext, useEffect, useState } from "react";
import { tableroDefault } from "../components/Wordle/Matriz";

export const Context = createContext({});

export const ContextApp = ({ children }) => {
  /* ---------------------------------------------------------*/
  /*                          WORDLE                          */

  const [tablero, setTablero] = useState(tableroDefault);
  const [intentoActual, setIntentoActual] = useState({ y: 0, x: 0 });
  const [palabraGanadora, setPalabraGanadora] = useState("");
  const [win, setWin] = useState(false);
  const [seleccion, setSeleccion] = useState("");
  const [palabra, setPalabra] = useState();
  const [juego, setJuego] = useState(false);

  useEffect(() => {
    if (palabra === palabraGanadora) {
      setWin(true);
    }
  }, [palabra]);

  useEffect(() => {
    partida();
  }, [juego]);

  const palabrasRandom = [
    "BRUNO",
    "ROQUE",
    "PABLO",
    "HELGA",
    "LUCHI",
    "ROCIO",
    "ELIAN",
    "LUCIO",
    "MARIA",
    "ELISA",
    "KEVIN",
    "KAREN",
    "JULIA",
    "JUANA",
    "MARCO",
    "OSCAR",
    "PEDRO",
    "JAIME",
    "DIEGO",
    "RAMON",
    "JORGE",
    "JESUS",
    "BRISA",
    "DARIO",
  ];

  const partida = () => {
    if (juego === true) {
      const random =
        palabrasRandom[Math.floor(Math.random() * palabrasRandom.length)];
      setPalabraGanadora(random);
    }
  };
  const onSeleccion = (valor) => {
    if (win === true) return;
    if (intentoActual.x > 4) return;
    const newTablero = [...tablero];
    newTablero[intentoActual.y][intentoActual.x] = valor;
    setTablero(newTablero);
    setIntentoActual({ ...intentoActual, x: intentoActual.x + 1 });
  };
  const onEnter = () => {
    const indice = intentoActual.y;
    const palabraW = tablero[indice].join("");
    setPalabra(palabraW);
    if (intentoActual.x !== 5) return;
    setIntentoActual({ y: intentoActual.y + 1, x: 0 });
  };
  const onDel = () => {
    const indice = intentoActual.y;
    const palabra = tablero[indice].join("");
    if (intentoActual.x === 0 || palabra === palabraGanadora) {
      return;
    }
    const newTablero = [...tablero];
    newTablero[intentoActual.y][intentoActual.x - 1] = "";
    setTablero(newTablero);
    setIntentoActual({ ...intentoActual, x: intentoActual.x - 1 });
  };

  const cerrar = () => {
    document.getElementById("instDiv").classList.add("ocultar");
  };

  const mostrar = () => {
    document.getElementById("instDiv").classList.remove("ocultar");
  };
  /* ---------------------------------------------------------*/

  return (
    <Context.Provider
      value={{
        tablero,
        seleccion,
        setJuego,
        setSeleccion,
        setTablero,
        intentoActual,
        setIntentoActual,
        onSeleccion,
        onEnter,
        onDel,
        win,
        palabraGanadora,
        cerrar,
        mostrar,
      }}
    >
      {children}
    </Context.Provider>
  );
};
