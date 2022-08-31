import React, { useContext } from "react";
import { RankingContext } from "../contexts/RankingContext";
import LineaTabla from "./LineaTabla";

function Tabla(props) {

    const {puestos} = useContext(RankingContext)

    console.log(puestos);
    console.log(props.data);
    return (
        <div className={"rankingContainer-" + props.tabla}>
            <h2>{props.titulo}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Pts.</th>
                    </tr>
                    {puestos.map((puesto) => {

                        console.log(props.data[puesto - 1].gamers);
                        return(
                            <LineaTabla
                                puesto = {puesto} 
                                user = {props.data[puesto - 1].gamers}
                                score = {props.data[puesto - 1][props.atributo]}
                            />
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Tabla 