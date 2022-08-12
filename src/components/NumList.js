import React, { useContext } from "react";

function NumList(props){

    return(        
        <div className="numList" >
            <p className="posibleNum">{props.num}</p>           
        </div>
    )
}

export default NumList;