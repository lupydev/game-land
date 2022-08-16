import React, {useContext} from "react";
import { BuscaminasContext } from "../../Contexts/BuscaminasContext";
import Row from "./Row";


function Board(){

    const {mat} = useContext(BuscaminasContext)

    return(
        <div className="boardBuscaminas">
            {mat.map((row) => {
                return(
                    <Row 
                        row = {row}
                    />
                )
                
            })}
        </div>        
    )
}

export default Board