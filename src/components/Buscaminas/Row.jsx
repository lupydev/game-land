import React, { useContext } from "react";
import { BuscaminasContext } from "../../Contexts/BuscaminasContext";
import Celd from "./Celd";

function Row(props) {
    
    const {mat} = useContext(BuscaminasContext)

    const cols = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]

    return(
        <div className="rowBuscaminas">
            {cols.map((col) => {
                return(
                    <Celd 
                        celd = {mat[props.row][col]}
                        c = {col}
                        r = {props.row}
                    />
                )
            })}
        </div>
    )
}

export default Row;