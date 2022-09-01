import {useContext, useEffect, useState} from 'react';
import { Casilla } from "./Casillas";
import { Teclado } from "./Teclado";
import { Context } from "../../contexts/WordleContext";
import { WordleInstructions } from "../WordleInstructions";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';

export const Wordle = () => {

  const [puntos, setPuntos] = useState()

  const { win, seleccion, setSeleccion, palabraGanadora, setJuego, timer, puntaje, setPuntaje} = useContext(Context);
  const { puntajeFinal, loadScore} = useContext(GlobalContext);

  const user = JSON.parse(sessionStorage.getItem("userData"));

  useEffect(()=>{
    if(win){
      const x = Date.now();
      let y =  (x - timer) - 2000;
      console.log(y)
      setPuntaje(y);
      const z = puntajeFinal(y, seleccion);
      setPuntos(puntajeFinal(y, seleccion));
      loadScore(user.id, user.recordWordle, z, "wordle");
    }
  }, [win])


  const seleccionDificultadFacil = () => {
    setSeleccion("facil");
    setJuego(true);
  }
  const seleccionDificultadMedio = () => {
    setSeleccion("medio");
    setJuego(true);
  }
  const seleccionDificultadDificil = () => {
    setSeleccion("dificil");
    setJuego(true);
  }
  const reset = () => {
    setSeleccion("");
    setJuego(false);
    window.location.reload();
  }

  return (
    <>
      <div className="tablero-container">
        {seleccion === "" && <>
          <Link className="reset" to="/wordleInstructions">info</Link>
          <div className="dificultad">
              <h1>Selecciona la dificultad:</h1>
              <button className="botonDificultad" onClick={seleccionDificultadFacil}>Animales <span className="dif" id="f">fácil</span></button>
              <button className="botonDificultad" onClick={seleccionDificultadMedio}>Nombres <span className="dif" id="m">medio</span></button>
              <button className="botonDificultad" onClick={seleccionDificultadDificil}>Palabras <span className="dif" id="d">difícil</span></button>
          </div></>
        }
        {seleccion && <>
          <button className="reset" onClick={reset}>reset</button>
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
          </div></>
        }
        {!win &&
          <Teclado/>
        }
        {win && 
          <div className="ganar">
            <h1>¡¡GANASTE!!</h1>
            <h2>La palabra fue <span className="palabraGanadora">{palabraGanadora}</span></h2>
            <h2>tu puntaje fue de: {puntos}</h2>
            <h2>tardaste: {puntaje / 1000} segundos</h2>
          </div>
        }
       
      </div>
    </>
  )
}
