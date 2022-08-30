import React from "react";

function LineaTabla(props) {    
    
    return (
        <tr id={props.user}>
            <td>{props.puesto}</td>
            <td>{props.user}</td>
            <td>{props.score}</td>
        </tr>
    )
}

export default LineaTabla