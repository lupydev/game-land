import React, { useContext } from "react";
import { SudokuContext } from "../../contexts/SudokuContext";
import Row from "./Row";
import Win from "./Win";

function Board() {
  const { posiblesNumbers, winner } = useContext(SudokuContext);

  return (
    <div className="board">
      {winner ? (
        <Win />
      ) : (
        <div>
          {posiblesNumbers.map((row) => {
            return <Row row={row} r={posiblesNumbers.indexOf(row)} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Board;
