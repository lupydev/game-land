import React, { useContext } from "react";
import { MemoryContext } from "../../contexts/MemoryContext";
import { Footer } from "../Footer";

function Instruction() {
  const { cerrar } = useContext(MemoryContext);

  return (
    <div className="instruction-wordle">
      <h2 className="instruction-closeInst" onClick={() => cerrar()}>
        X
      </h2>
      <h3>¿Cómo se Juega?</h3>

      <p>
        Al principio de la partida las cartas se mezclan de forma aleaoria y
        permanencen boca abajo.
      </p>
      <br />
      <p>
        El objetivo es lograr <strong>memorizar</strong> la ubicaci&oacute;n de
        las diferentes cartas con el fin de voltear sucesivamente las dos (2)
        cartas id&eacute;nticas que formen la pareja.
      </p>
      <br />
      <p>
        La partida se terminar&aacute; cuando est&eacute;n todas las parejas
        encontradas.
      </p>

      <br />
      <h3>Puntaje:</h3>

      <p>
        El puntaje que obtengas dependera de la dificultad seleccionada y el
        tiempo que demores en hacerlo.
      </p>
      <p>
        En cada dificultad obtendras un puntaje base por tan solo ganar la
        partida, y a su vez obtendras un extra por hacerlo en menos de 30 min.
        Mientras menos demores mayor sera el puntaje extra.
      </p>

      <ul>
        <li>
          <p>
            <span>Facil: </span> Obtienes una base de 500 pts y un extra de
            hasta 2700 pts (Puntaje Maximo: 3200 pts)
          </p>
        </li>
        <li>
          <p>
            <span>Medio: </span> Obtienes una base de 2000 pts y un extra de
            hasta 4000 pts (Puntaje Maximo: 6000 pts)
          </p>
        </li>
        <li>
          <p>
            <span>Difícil: </span> Obtienes una base de 3000 pts y un extra de
            hasta 7000 pts (Puntaje Maximo: 10000 pts)
          </p>
        </li>
      </ul>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
}

export default Instruction;
