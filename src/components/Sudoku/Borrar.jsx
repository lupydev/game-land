import React, { useContext } from "react";
import { SudokuContext } from "../../Contexts/SudokuContext";

const imagen = require.context("./../../img", true);

function Borrar(props) {
  const { selected, borrar } = useContext(SudokuContext);

  return (
    <button
      className="btnModo"
      id="goma"
      onClick={() => borrar(selected)}
      disabled={props.disable}
    >
      <img src={imagen("./goma.png")} className="img" alt="Lapiz" />
    </button>
  );
}

export default Borrar;
