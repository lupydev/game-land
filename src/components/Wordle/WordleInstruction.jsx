import React, { useContext } from "react";
import { Context } from "../../contexts/WordleContext";
import { Footer } from "../Footer";

function Instruction() {
  const { cerrar } = useContext(Context);

  return (
    <div className="instruction-wordle">
      <div className="instruction-title">
        <h2>¿Cómo se Juega?</h2>
        <h2 className="instruction-closeInst" onClick={() => cerrar()}>
          X
        </h2>
      </div>

      <p>
        Tienes que adivinar la palabra oculta en 5 intentos, el color de las
        letras cambia para mostrar lo cerca que estás.
      </p>
      <br />
      <p>Para comenzar, sólo ingresa una palabra, por ejemplo:</p>
      <br />
      <p className="catro">
        <span className="c">C</span>
        <span className="a">A</span>
        <span className="t">T</span>
        <span className="r">R</span>
        <span className="o">O</span>
      </p>
      <br />
      <p className="center">Donde...</p>
      <br />
      <div className="letras">
        <div className="column-left">
          <p className="catro">
            <span className="o">O</span>
          </p>
        </div>
        <p>No forma parte de la palabra.</p>
        <div className="column-left">
          <p className="catro">
            <span className="t">T</span>
          </p>
          <p className="catro">
            <span className="r">R</span>
          </p>
        </div>
        <p>Forma parte de la palabra, pero en diferente ubiacaci&oacute;n.</p>
        <div className="column-left">
          <p className="catro">
            <span className="c">C</span>
          </p>
          <p className="catro">
            <span className="a">A</span>
          </p>
        </div>
        <p>Forma parte de la palabra y es correcta la ubicación.</p>
      </div>
      <br />

      <p>Sigue intentando hasta encontrar la palabra correcta</p>
      <br />
      <p className="catro">
        <span className="c">C</span>
        <span className="c">A</span>
        <span className="c">R</span>
        <span className="c">T</span>
        <span className="c">A</span>
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
