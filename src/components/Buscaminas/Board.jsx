import React, { useContext } from "react";
import { BuscaminasContext } from "../../Contexts/BuscaminasContext";
import Row from "./Row";


function Board(){

    const {mat} = useContext(BuscaminasContext)

    let rows = []

    for(let i = 0; i < mat.length; i++){
        rows.push(i)
    }

    return(
        <div className="boardBuscaminas">
            {rows.map((row) => {
                return(
                    <Row 
                        row = {row}
                        mat = {mat}
                    />
                )
                
            })}
        </div>        
    )
}

export default Board