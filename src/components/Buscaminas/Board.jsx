import React, { useContext } from "react";
import { BuscaminasContext } from "../../contexts/BuscaminasContext";
import Row from "./Row";
import Win from "./Win";

function Board(){

    const {mat, winner} = useContext(BuscaminasContext)

    let rows = []

    for(let i = 0; i < mat.length; i++){
        rows.push(i)
    }

    return(
        <div className="boardBuscaminas">
            {winner 
            ? 
                <Win />
            :
                <div>
                    {rows.map((row) => {
                        return(
                            <Row 
                                row = {row}
                                mat = {mat}
                            />
                        )
                        
                    })}
                </div>
            }
        </div>        
    )
}

export default Board